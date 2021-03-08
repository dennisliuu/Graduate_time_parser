import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const ShowResult = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [professors, setProfessor] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllProfessors);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {professors.map((val) => {
        return (
          <div key={valid}>
          <h1>{val.Name}: </h1>
          <h3>{val.School}</h3>
          <span>
            <li>{val.Y1}</li>
            <li>{val.Y2}</li>
            <li>{val.Y2_3}</li>
            <li>{val.Y3_4}</li>
            <li>{val.Y4_beyond}</li>
          </span>
          </div>
        )
      })}
    </div>
  );
};

export default ShowResult;
