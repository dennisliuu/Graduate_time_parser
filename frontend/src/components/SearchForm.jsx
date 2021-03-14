import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const SearchForm = ({ schools }) => {
  const [professor, setProfessor] = useState([]);
  const [executeSearch, { data }] = useLazyQuery(LOAD_USERS);

  useEffect(() => {
    if (data) {
      setProfessor(
        data.getAllProfessors.filter(
          (professor) => professor.Name == "XXX" && professor.School == "NTHU"
        )
      );
    }
  }, [data]);

  let lists = [];
  schools.map((school) => {
    lists.push(
      <div className="box" key={school}>
        <input className="input" id={school} type="radio" name="school_radio" />
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
      />
      <button
        className="button is-plain is-primary is-sm is-margin-top-xxl"
        type="button"
        onClick={
          () => executeSearch()
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
