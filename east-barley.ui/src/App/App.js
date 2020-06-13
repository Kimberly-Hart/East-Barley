import React, { Component } from 'react';
import './App.scss';

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
    </div>
    );
  }
}

export default App;
