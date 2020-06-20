import './Profile.scss';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import userData from '../../../helpers/data/userData';
import authData from '../../../helpers/data/authData';

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
      <div>
        <h1>{user.firebaseUID}</h1>
      </div>
    );
  }
}

export default Profile;
