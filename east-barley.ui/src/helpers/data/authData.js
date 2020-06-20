import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import { createConfigItem } from '@babel/core';
const baseUrl = 'https://localhost:44319/api/';


axios.interceptors.request.use(function (request) {
  const token = sessionStorage.getItem('token');
  if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, function (err) {
  return Promise.reject(err);
});

const registerUser = (user) => {
  
  return firebase.auth().createUserWithEmailAndPassword("test@themail.com", "jkhasd983249834kjhddsf*&^^&%$").then(cred => {
   
    let userInfo = {email: cred.user.email};
    
    cred.user.getIdToken()
     
      .then(token => sessionStorage.setItem('token',token))
      
      // .then(() => axios.post(`${baseUrl}/users`,userInfo));
  });
};

const loginUser = (user) => {
 return firebase.auth().signInWithEmailAndPassword("test@themail.com", "jkhasd983249834kjhddsf*&^^&%$").then(cred => {
    cred.user.getIdToken()
      .then(token => sessionStorage.setItem('token',token));
  });
};

const logoutUser = () => {
  return firebase.auth().signOut();
};
const getUid = () => {
  return firebase.auth().currentUser.uid;
};

export default {getUid,
  loginUser,
  logoutUser,
  registerUser,
};
