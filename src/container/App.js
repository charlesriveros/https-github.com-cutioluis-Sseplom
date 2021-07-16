import React from "react";
import "./App.css";
import { Navbar } from "../components";
import Promotion from "../components/Promotion/Promotion";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <>
      <Promotion />
      <Navbar />
      <Header />
    </>
  );
};

export default App;
