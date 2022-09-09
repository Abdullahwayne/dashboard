import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  //   uri: process.env.GRAPHQL_URI,
  uri: "https://statsjr-backend.herokuapp.com/",
  cache: new InMemoryCache(),
});

export { client };
