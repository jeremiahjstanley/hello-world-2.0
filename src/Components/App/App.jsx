import React, { Component } from 'react';
import './App.scss';
import ControlledForm from '../ControlledForm/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ControlledForm />
      </div>
    );
  }
}

export default App;
