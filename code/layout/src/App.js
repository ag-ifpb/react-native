import React, { useState } from "react";
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import Main from "./layout/Main";
import "./styles.css";

const styles = {
  titleContainer: {
    textAlign: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "5px 0"
  },
  input: {
    height: 25
  },
  scrollable: {
    height: "300px",
    overflowY: "auto",
    overflowX: "hidden"
  }
};

const App = () => {
  return (
    <Main />
  );
};

export default App;
