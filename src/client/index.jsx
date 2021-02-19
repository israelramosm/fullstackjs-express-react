import ReactDOM from "react-dom";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import "./styles/reset.scss"; // importing reset
import "./styles/index.scss"; // importing global styles
import App from "./App";

// Needed for Hot Module Replacement
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}

// Here should start the React APP
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
