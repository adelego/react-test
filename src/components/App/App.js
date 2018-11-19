import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import JediListContainer from '../JediList/JediListContainer.js';
import JediFormContainer from '../JediForm/JediFormContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <JediListContainer />
        <JediFormContainer/>
      </div>
    );
  }
}

export default App;