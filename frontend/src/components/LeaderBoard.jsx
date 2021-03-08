import React, { useState, useEffect } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { LOAD_USERS } from "../GraphQL/Queries";

const ShowResult = () => {
  // const { error, loading, data } = useQuery(LOAD_USERS);
  const [professors, setProfessors] = useState([]);
  const p = [
    {
      id: 1,
      School: "NTHU",
      Name: "XXX",
      Graduated_student: "5",
      Y1: "1",
      Y2: "1",
      Y2_3: "1",
      Y3_4: "1",
      Y4_beyond: "1",
    },
    {
      id: 2,
      School: "NCU",
      Name: "XXXXXXXXXXXX",
      Graduated_student: "5",
      Y1: "10",
      Y2: "10",
      Y2_3: "10",
      Y3_4: "10",
      Y4_beyond: "10",
    },
  ];
  useEffect(() => {
    setProfessors(p);
  }, []);
  return (
    <>
    <h1 class="text is-warning">排行榜</h1>
      {professors.map((val) => {
        return (
          <div className="card is-floating is-outline is-zoom is-margin-sm" style={{width: "300px"}}>
            <div className="box is-padding-md">
              <div key={val.id}>
                <h1 className="is-overflow-ellipsis">Name: {val.Name} </h1>
                <h3>School: {val.School}</h3>
                <p>
                  戰績：{val.Y1}/{val.Y2}/{val.Y2_3}/{val.Y3_4}/{val.Y4_beyond}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShowResult;
