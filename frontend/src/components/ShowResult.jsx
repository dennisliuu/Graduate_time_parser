import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const ShowResult = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    if (data) setProfessors(data.getAllProfessors);
  }, [data]);

  return (
    <div className="card is-floating is-zoom">
      <div className="box is-padding-md">
        {professors.map((val) => {
          return (
            <div key={val.id}>
              <h1>Name: {val.Name} </h1>
              <h3>School: {val.School}</h3>
              <ul className="list is-square">
                <li className="item">一年畢業的天才：{val.Y1}</li>
                <li className="item">兩年準時畢業：{val.Y2}</li>
                <li className="item">兩到三年畢業：{val.Y2_3}</li>
                <li className="item">三到四年畢業：{val.Y3_4}</li>
                <li className="item">四年以上畢業：{val.Y4_beyond}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowResult;
