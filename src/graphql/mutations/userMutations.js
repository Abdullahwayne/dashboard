import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      firstname
      lastname
      phone
      email
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      firstname
      lastname
      phone
      email
      token
    }
  }
`;

export { LOGIN_USER, REGISTER_USER };
