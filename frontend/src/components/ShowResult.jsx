import React from "react";

const ShowResult = ({ professor }) => {
  return (
    <div className="card is-floating is-zoom is-outline">
      <div className="box is-padding-md">
        {Object.keys(professor).map((index) => {
          return (
            <div key={index}>
              <h1>Name: {professor["Name"]} </h1>
              <h3>School: {professor["School"]}</h3>
              <ul className="list is-square">
                <li className="item">一年畢業的天才：{professor["Y1"]}</li>
                <li className="item">兩年準時畢業：{professor["Y2"]}</li>
                <li className="item">兩到三年畢業：{professor["Y2_3"]}</li>
                <li className="item">三到四年畢業：{professor["Y3_4"]}</li>
                <li className="item">四年以上畢業：{professor["Y4_beyond"]}</li>
              </ul>
            </div>
          );
        })}

        {/* {professor.map((val) => {
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
        })} */}
      </div>
    </div>
  );
};

export default ShowResult;
