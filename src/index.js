import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//pass GraphQL endpoint
const client = new ApolloClient({ uri: "https://graphql-pokemon.now.sh/" });

const ApolloApp = (AppComponent) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
