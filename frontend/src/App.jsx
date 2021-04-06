import React from "react";

import "musubii/dist/musubii.min.css";
import "./App.css";

import SearchForm from "./components/SearchForm";
import Leaderboard from "./components/Leaderboard";

const schools = ["NCTU", "NTHU", "NYMU", "NCU"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="text is-info is-weight-600 is-line-height-xxl">
          畢業年限查詢系統
        </h2>
        <SearchForm schools={schools} />
        {/* <Leaderboard /> */}

        <p className="is-margin-top-xxl">僅供參考</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/dennisliuu/dennisliuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whoami
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://github.com/dennisliuu/Graduate_time_parser"
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
