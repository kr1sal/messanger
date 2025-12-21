import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: "https://localhost:4000/graphql" }),
    cache: new InMemoryCache(),
});