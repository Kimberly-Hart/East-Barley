import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.scss';
import Auth from '../components/pages/Auth/Auth';
import Beers from '../components/pages/AllBeer/AllBeer';
import Books from '../components/pages/AllBooks/AllBooks';
import Cart from '../components/pages/Cart/Cart';
import Homepage from '../components/pages/Homepage/Homepage';
import Profile from '../components/pages/Profile/Profile';
import Whiskeys from '../components/pages/AllWhiskey/AllWhiskey';

const Over21Route = ({ component: Component, verified, ...rest }) => {
  const routeChecker = (props) => (verified === true ? <Component {...props} {...rest}/> : <Redirect exact to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    over21: true,
  }

  render() {
    const { authed, over21 } = this.state;

    return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component={Homepage} verified={over21} authed={authed} />
            <Route path="/auth" exact component={Auth} verified={over21} authed={authed} />
            <PrivateRoute path="/profile" exact component={Profile} verified={over21} authed={authed} />
            <Over21Route path="/whiskey" exact component={Whiskeys} verified={over21} authed={authed} />
            <Over21Route path="/beer" exact component={Beers} verified={over21} authed={authed} />
            <Route path="/books" exact component={Books} verified={over21} authed={authed} />
            <PrivateRoute path="/cart" exact component={Cart} verified={over21} authed={authed} />
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
