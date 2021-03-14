import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";
import { useLazyQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const SearchForm = ({ schools }) => {
  const [professor, setProfessor] = useState([]);
  const [search, setSearch] = useState({
    Name: "",
    School: "",
  });
  const [executeSearch, { data }] = useLazyQuery(LOAD_USERS);

  useEffect(() => {
    if (data) {
      setProfessor(
        data.getAllProfessors.filter(
          (professor) =>
            professor.Name == search.Name || professor.School == search.School
        )
      );
    }
  }, [data]);

  let lists = [];
  schools.map((school) => {
    lists.push(
      <div className="box" key={school}>
        <input
          className="input"
          id={school}
          type="radio"
          name="school_radio"
          value={school}
          onChange={(e) => setSearch({ School: e.currentTarget.value })}
        />
        <label className="label is-middle" htmlFor={school}>
          <span className="radio is-margin-right-xxs"></span>
          <span className="text">{school}</span>
        </label>
      </div>
    );
  });

  return (
    <>
      <div className="box is-flex is-space-right-md">{lists}</div>
      <input
        className="input is-underline is-center text is-light"
        type="text"
        name="name"
        placeholder="教授名稱"
        value={search.Name}
        onChange={(e) => setSearch({ Name: e.target.value })}
      />
      <button
        className="button is-plain is-primary is-sm is-margin-top-xxl"
        type="button"
        onClick={
          () => {
            executeSearch();
          }
          //   {
          //   variables: { filter: searchFilter },
          // }
        }
      >
        探す！
      </button>
      <ShowResult professor={professor} />
    </>
  );
};

export default SearchForm;
