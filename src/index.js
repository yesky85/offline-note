import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import GlobalStyles from "./components/globalStyles";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
