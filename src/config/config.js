import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields:{
        users : {
            merge (existing, incoming) {
              return incoming;
            }
        }
      }
    }
  }
});

const client = new ApolloClient({
  //   uri: process.env.GRAPHQL_URI,
  uri: "https://statsjr-backend.herokuapp.com/",
  cache,
});



export { client };
