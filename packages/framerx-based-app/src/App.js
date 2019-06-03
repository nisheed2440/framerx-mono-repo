import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'nbs-fonts/lib/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span className="icon-nbs icon-nbs-close" />Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        style={{fontFamily:'nbs-light'}}
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
