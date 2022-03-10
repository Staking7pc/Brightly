import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./components/Welcome";
import App from "./components/App";
import Cards from "./components/Cards";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome />   
    <Cards />

  </React.StrictMode>,
  document.getElementById("root")
);
