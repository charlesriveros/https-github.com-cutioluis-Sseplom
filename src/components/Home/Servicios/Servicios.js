import React from "react";
import "./Servicios.css";

const Servicios = (props) => {
  return (
    <section className="seplom-services">
      <h2 className="services-title">{props.title}</h2>
      <p className="services-paragraph">{props.paragraph}</p>
    </section>
  );
};

export default Servicios;
