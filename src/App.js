import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    response => response.json()
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>response</div>

        <p>
          Hello This is the genesys hackathon Edit <code>src/App.js</code> and
          save to reload.
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
