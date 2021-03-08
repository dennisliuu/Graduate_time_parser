import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "musubii/dist/musubii.min.css";

import SearchForm from "./components/SearchForm";
import ShowResult from "./components/ShowResult";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>畢業年限查詢系統</h2>
        {/* <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}
        {/* <SearchForm /> */}
        <ShowResult />
        <button
          className="button is-plain is-primary is-sm is-margin-top-xxl"
          type="button"
        >
          探す！
        </button>

        <p className="is-margin-top-xxl">Good luck!</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://github.com/dennisliuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Github
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
