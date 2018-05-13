import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1});
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div className="counter">
            <div className="display">{this.state.counter}</div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
