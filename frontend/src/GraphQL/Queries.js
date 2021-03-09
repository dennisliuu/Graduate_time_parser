import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllProfessors {
      id
      School
      Name
      Graduated_student
      Y1
      Y2
      Y2_3
      Y3_4
      Y4_beyond
    }
  }
`;