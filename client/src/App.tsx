import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Upload from "./Upload";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Upload />
      </ApolloProvider>
    </div>
  );
}

export default App;
