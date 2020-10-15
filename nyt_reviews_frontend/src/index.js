import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";

const cache = new InMemoryCache({});
const defaultState = {
  queries: {},
  menu: {},
};
const httpLink = new HttpLink({
  uri: `http://${process.env.REACT_APP_ENDPOINT}`,
});

const client = new ApolloClient({
  cache,
  link: httpLink,
  clientState: {
    defaults: defaultState,
  },
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
