import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Nav />
      </div>

      <Grid />
    </div>
  );
};

export default App;

