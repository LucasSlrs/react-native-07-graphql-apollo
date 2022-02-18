import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://wawa-graphql-example.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
