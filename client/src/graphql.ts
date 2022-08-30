import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://api.gofirti.com/graphql",
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }),
  cache: new InMemoryCache(),
});
