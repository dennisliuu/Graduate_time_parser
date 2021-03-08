import React, { useState } from "react";
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

        <h2 className="text is-info is-weight-600 is-line-height-xxl">畢業年限查詢系統</h2>
        {/* <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button> */}
        {/* <SearchForm /> */}
        <ShowResult />

        <p className="is-margin-top-xxl">僅供參考</p>
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
