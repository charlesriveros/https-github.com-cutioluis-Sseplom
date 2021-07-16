import React from "react";
import "./App.css";
import { Navbar } from "../components";
import Promotion from "../components/Promotion/Promotion";

const App = () => {
  return (
    <>
      <Promotion />
      <Navbar />
    </>
  );
};

export default App;
