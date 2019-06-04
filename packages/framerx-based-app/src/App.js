import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "nbs-fonts/lib/index.css";
import Button from "./Button";
import Typography from "./Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography type="h3" color="#ffffff">
          <span className="icon-nbs icon-nbs-close" />
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button
          text="Learn React"
          iconSide="right"
          buttonType="button-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        />
      </header>
    </div>
  );
}

export default App;
