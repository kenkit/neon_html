import React from 'react';
import logo from './logo.svg';
import store from './store/store'
import './App.css';
const FOO = 'FOO';

function Bar() {
    return {
        type: FOO,
        socket: {
            send: true, // The action will be send through the socket, default: false
            keepSocket: true, // If false, the socket object will be removed after send, default: false
            silent: false // If true, it will not raise erros if fail to send, default: false
        }
    };
} 
function App() {
  store.dispatch(Bar());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
