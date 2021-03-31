import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";

const executeSearch = async (req) => {
  console.log(req.Name);
  await fetch("http://127.0.0.1:5000/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      School: req.School,
      Name: req.Name,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((e) => {
      console.log(e);
    });
};
const SearchForm = ({ schools }) => {
  const [professor, setProfessor] = useState([]);
  const [search, setSearch] = useState({
    Name: "",
    School: "",
  });

  let lists = [];
  schools.map((school) => {
    lists.push(
      <div className="box" key={school}>
        <input
          className="input"
          id={school}
          type="radio"
          name="school_radio"
          value={school == 'NCTU' ? '1' : school == 'NCU' ? '2': school == 'NTHU' ? '3' : '4'}
          onChange={(e) =>
            setSearch({ Name: search.Name, School: e.currentTarget.value })
          }
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
        onChange={(e) =>
          setSearch({ Name: e.target.value, School: search.School })
        }
      />
      <button
        className="button is-plain is-primary is-sm is-margin-top-xxl"
        type="button"
        onClick={() => {
          executeSearch({
            Name: search.Name,
            School: search.School,
          });
        }}
      >
        探す！
      </button>
      <ShowResult professor={professor} />
    </>
  );
};

export default SearchForm;
