import { gql } from "@apollo/client";

const LOGIN_ADMIN = gql`
  mutation Mutation($loginAdminInput: LoginAdminInput) {
    loginAdmin(loginAdminInput: $loginAdminInput) {
      id
     
      email
      token
    }
  }
`;

const REGISTER_ADMIN = gql`
mutation Mutation($registerAdminInput: RegisterAdminInput) {
  registerAdmin(registerAdminInput: $registerAdminInput) {
    id
    username
    email
    token
    role
  }
}
`;
const DELETE_USER = gql`

mutation DeleteUser($id: ID!) {
  deleteUser(ID: $id) {
    id
    firstname
    lastname
    email
    password
    phone
    role
  }
}`

export { LOGIN_ADMIN, REGISTER_ADMIN,DELETE_USER };
