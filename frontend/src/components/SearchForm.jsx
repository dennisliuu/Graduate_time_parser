import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";

const SearchForm = ({ school }) => {
  const [Professor, setProfessor] = useState({ Name: "AAA", School: "NTHU" });

  let lists = [];
  school.map((s) => {
    lists.push(
      <div className="box" key={s}>
        <input className="input" id={s} type="radio" name="school_radio" />
        <label className="label is-middle" htmlFor={s}>
          <span className="radio is-margin-right-xxs"></span>
          <span className="text">{s}</span>
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
        name="text"
        placeholder="教授名稱"
      />
      <button
        className="button is-plain is-primary is-sm is-margin-top-xxl"
        type="button"
      >
        探す！
      </button>
      <ShowResult Professor={Professor} />
    </>
  );
};

export default SearchForm;
