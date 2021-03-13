import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import "./App.css";
import "musubii/dist/musubii.min.css";

import SearchForm from "./components/SearchForm";
import ShowResult from "./components/ShowResult";
import Leaderboard from "./components/Leaderboard";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const school = ["NCTU", "NTHU", "NYMU", "NCU"];

function App() {
  const [Professor, setProfessor] = useState({ Name: "XXX", School: "NTHU" });

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="text is-info is-weight-600 is-line-height-xxl">
          畢業年限查詢系統
        </h2>
        <ApolloProvider client={client}>
          <SearchForm school={school} />
          <ShowResult Professor={Professor} />
          <Leaderboard />
        </ApolloProvider>

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
