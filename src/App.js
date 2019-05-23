import React from 'react';
import logo from './logo.svg';
import store from './store/store'
import MODEL from './model/model'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Model name:
        </p>
          Learn React
      </header>
    </div>
  );
}

export default App;
