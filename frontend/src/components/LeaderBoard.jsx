import React, { useState, useEffect } from "react";

const LeaderBoard = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    if (data) setProfessors(data.getAllProfessors);
  }, [data]);
  
  return (
    <>
      <h1 className="text is-warning">排行榜</h1>
      {professors.map((val) => {
        return (
          <div
            className="card is-floating is-outline is-zoom is-margin-sm"
            style={{ width: "300px" }}
            key={val.id}
          >
            <div className="box is-padding-md">
              <div>
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

export default LeaderBoard;
