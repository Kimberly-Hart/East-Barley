import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Header, Icon } from 'semantic-ui-react';
import userData from '../../../helpers/data/userData';
import authData from '../../../helpers/data/authData';
import './Profile.scss';


class Profile extends React.Component {
  state = {
    user: {},
  }

  // getUid = () => firebase.auth().currentUser.uid;

  componentDidMount() {
    userData.getUserByUID(firebase.auth().currentUser.uid)
      .then((user) => {
        this.setState({ user });
      })
      .catch((errorFromProfile) => console.error(errorFromProfile));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profilePage">
        <div className="accountTitle">
           <Header as='h2'>
              <Icon name='settings' />
              <Header.Content>
                Account Information
              </Header.Content>
            </Header>
            </div>
      </div>
    );
  }
}

export default Profile;
