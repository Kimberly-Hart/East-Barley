import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import './App.scss';
import userData from '../helpers/data/userData';
import authData from '../helpers/data/authData';
import AgeVerificationModal from '../components/shared/AgeVerificationModal/AgeVerificationModal';
import Auth from '../components/pages/Auth/Auth';
import Beers from '../components/pages/AllBeers/AllBeers';
import Books from '../components/pages/AllBooks/AllBooks';
import Cart from '../components/pages/Cart/Cart';
import Employees from '../components/pages/Employees/Employees';
import Home from '../components/pages/Homepage/Home';
import Profile from '../components/pages/Profile/Profile';
import Whiskeys from '../components/pages/AllWhiskeys/AllWhiskeys';
import Invoice from '../components/pages/Invoice/Invoice';
import firebaseApp from '../helpers/data/connection';
import MyNavBar from '../components/shared/MyNavBar/MyNavBar';
import employeeData from '../helpers/data/employeeData';

const Over21Route = ({ component: Component, verified, ...rest }) => {
  const routeChecker = (props) => (verified === true ? <Component {...props} {...rest}/> : <Redirect exact to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const EmployeeRoute = ({ component: Component, isEmployee, ...rest }) => {
  const routeChecker = (props) => (isEmployee === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
    over21: false,
    isEmployee: false,
    dobModalIsOpen: false,
    employee: {},
    user: {},
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
        userData.getUserByUID(authData.getUid())
          .then((userDetails) => {
            this.setState({ user: userDetails });
            if (userDetails.isOver21) {
              this.setState({ over21: true });
            } else {
              this.setState({ over21: false });
            }
            employeeData.getEmployeeByUserId(userDetails.userId)
              .then((employeeDetails) => {
                if (employeeDetails.salesRepId) {
                  this.setState({ isEmployee: true, employee: employeeDetails });
                }
              });
          }).catch((errorFromApp) => {
            this.setState({ dobModalIsOpen: true });
            console.error(errorFromApp);
          });
      } else {
        this.setState({
          authed: false,
          dobModalIsOpen: true,
          over21: false,
          isEmployee: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setOver21 = (status) => {
    this.setState({ over21: status });
  };

  setIsEmployee = (status) => {
    this.setState({ isEmployee: status });
  };

  setDobModalIsOpen = (status) => {
    this.setState({ dobModalIsOpen: status });
  };

  render() {
    const {
      authed,
      over21,
      isEmployee,
      dobModalIsOpen,
      employee,
      user,
    } = this.state;

    return (
    <div className="App">
      <Router>
      <MyNavBar authed={authed} verified={over21} isEmployee={isEmployee} setOver21={this.setOver21} setIsEmployee={this.setIsEmployee} />
      <AgeVerificationModal authed={authed} dobModalIsOpen={dobModalIsOpen} verified={over21} setOver21={this.setOver21} setDobModalIsOpen={this.setDobModalIsOpen} />
        <Switch>
            <Route path="/" exact component={() => <Home verified={over21} authed={authed} />} />
            <Route path="/auth" exact component={() => <Auth verified={over21} authed={authed} />} />
            <PrivateRoute path="/profile" exact component={() => <Profile verified={over21} authed={authed} user={user} />} authed={authed} />
            <PrivateRoute path='/invoice/:invoiceId' exact component={(props) => <Invoice verified={over21} {...props} authed={authed} user={user} />} authed={authed} />
            <Over21Route path="/whiskey" exact component={() => <Whiskeys verified={over21} authed={authed} />} verified={over21} />
            <Over21Route path="/beer" exact component={() => <Beers verified={over21} authed={authed} />} verified={over21} />
            <Route path="/books" exact component={() => <Books verified={over21} authed={authed} />} />
            <PrivateRoute path="/cart" exact component={() => <Cart verified={over21} authed={authed} />} authed={authed} />
            <EmployeeRoute path="/employee" exact component={() => <Employees employee={employee} user={user} isEmployee={isEmployee} />} isEmployee={isEmployee} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
