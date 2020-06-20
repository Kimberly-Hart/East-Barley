import './Auth.scss';
import React from 'react';
import authData from '../../../helpers/data/authData';

class Auth extends React.Component {
  render() {

    authData.registerUser({});

    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}

export default Auth;
