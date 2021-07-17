import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="seplom-header">
      <h1>
        <span>Worlo</span>
        <br />
        <span>Studio.</span>
      </h1>
      <button className="btn btn-contratar">Contratar</button>
      <button className="btn btn-cotizacion">Cotizacion</button>
      <p className="seplom-header-paragraph">
        Seplom es una empresa de <b>Serivicio de Plomeria Inmediata</b> para
        ayudarte en los 
        <br />
        trabajos que necesites a un precio accesible para todo
        el publico
      </p>
    </header>
  );
};

export default Header;
