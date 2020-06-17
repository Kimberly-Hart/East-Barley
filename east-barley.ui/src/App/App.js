import React, { Component } from 'react';
import './App.scss';
import AllBooks from '../components/pages/AllBooks/AllBooks';
import AllBeers from '../components/pages/AllBeers/AllBeers';

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
    </div>
    );
  }
}

export default App;
