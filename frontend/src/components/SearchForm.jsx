import React, { useState } from "react";

const SearchForm = () => {
  const school = ["NCTU", "NTHU", "NYMU", "NCU"];
  let lists = [];
  for (let i = 0; i <= school.length - 1; i++)
    lists.push(
      <div className="box" key={school[i]}>
        <input
          className="input"
          id={school[i]}
          type="radio"
          name="school_radio"
        />
        <label className="label is-middle" htmlFor={school[i]}>
          <span className="radio is-margin-right-xxs"></span>
          <span className="text">{school[i]}</span>
        </label>
      </div>
    );
  return (
    <>
      <div className="box is-flex is-space-right-md">{lists}</div>
      <input
        className="input is-underline is-center text is-light"
        type="text"
        name="text"
        placeholder="教授名稱"
      />
    </>
  );
};

export default SearchForm;
