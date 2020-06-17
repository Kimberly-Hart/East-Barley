import React, { Component } from 'react';
import HomePage from '../components/pages/Homepage/HomePage.js';
import './App.scss';

class App extends Component {
  testClick() {
    console.log('this is a test');
  }

  render() {
    return (
    <div className="App">
      <HomePage />
    </div>
    );
  }
}

export default App;
