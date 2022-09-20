import { gql } from "@apollo/client";

const ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      firstname
      lastname
      email
      role
    }
  }
`;

export { ALL_USERS };
