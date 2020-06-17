import React, { Component } from 'react';
import './App.scss';
import AllBooks from '../components/pages/AllBooks/AllBooks';
import AllBeers from '../components/pages/AllBeers/AllBeers';
import AllWhiskeys from '../components/pages/AllWhiskeys/AllWhiskeys';

class App extends Component {
  testClick() {
    console.log('this is a test');
  }

  render() {
    return (
    <div className="App">
      <button
        className="btn btn-danger"
        onClick={() => this.testClick()}
        >
          Test Button</button>
          <AllBooks />
          <AllBeers />
          <AllWhiskeys />
    </div>
    );
  }
}

export default App;
