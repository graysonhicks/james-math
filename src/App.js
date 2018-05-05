import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  addTwoNumbers(a, b) {
    return a + b;
  }
  subtractTwoNumbers(a, b) {
    return a - b;
  }
  multiplyTwoNumbers(a, b) {
    return a * b;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to James-Math</h1>
        </header>
        <p className="App-intro">
          Here are some of my math challenges:
        </p>
        <p>
          This is a function that adds two numbers:
          <br />
          <br />
          <code>
            {`addTwoNumbers(a, b) {
                return a + b;
            }`}
          </code>
          <br />
          <br />
          {this.addTwoNumbers(793730, 693205)}
        </p>
        
        <p>
          This is a function that subtracts two numbers:
          <br />
          <br />
          <code>
            {`subtractTwoNumbers(a, b) {
                return a - b;
            }`}
          </code>
          <br />
          <br />
          {this.subtractTwoNumbers(1, 1)}
        </p>
        
          <p>
            This is a function that multiplies two numbers:
            <br />
            <br />
            <code>
              {`multiplyTwoNumbers(a, b) {
                return a * b;
              }`}
            </code>
            <br />
            <br />
            {this.multiplyTwoNumbers(9, 5)}
          </p>
      </div>
    );
  }
}

export default App;
