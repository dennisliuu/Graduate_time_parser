import React, { useState, useEffect } from "react";
import ShowResult from "./ShowResult";

const SearchForm = ({ schools }) => {
  const [professor, setProfessor] = useState([]);
  const [search, setSearch] = useState({
    Name: "",
    School: "",
  });
  const [open, setOpen] = useState(false);

  let lists = [];
  schools.map((school) => {
    lists.push(
      <div className="box" key={school}>
        <input
          className="input"
          id={school}
          type="radio"
          name="school_radio"
          value={
            school == "NCTU"
              ? "1"
              : school == "NCU"
              ? "2"
              : school == "NTHU"
              ? "3"
              : "4"
          }
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
        onClick={async () => {
          let res = await fetch("http://127.0.0.1:5000/api", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              School: search.School,
              Name: search.Name,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              return result;
            })
            .catch((error) => {
              throw error;
            });
          setProfessor({
            Name: res.Name,
            School: res.School,
            Y1: res.Y1,
            Y2: res.Y2,
            Y2_3: res.Y2_3,
            Y3_4: res.Y3_4,
            Y4_beyond: res.Y4_beyond,
          });
          setOpen(true);
        }}
      >
        探す！
      </button>
      {open ? <ShowResult professor={professor} /> : ""}
    </>
  );
};

export default SearchForm;
