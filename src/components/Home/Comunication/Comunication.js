import React from "react";
import ComunicationImage from "../../../assets/static/seplom-comunication.png";
import "./Comunication.css";

const Comunication = () => {
  return (
    <section className="seplom-hire">
      <div className="hire__container">
        <div className="container__container-rigth">
          <article className="rigth-article">
            <h3>Comunicacion 24/7</h3>
            <p>Obten una comunicacion con expertos que te guiaran en todo tu proceso de trabajo</p>
          </article>
          <article className="rigth-article">
            <h3>Sin retrasos</h3>
            <p>Si tienen retrasos en tu comunicaion te hacemos un <span className="rigth-article-span">descuento</span> del 5%</p>
          </article>
        </div>
        <div className="container__container-left">
          <img className="comunication-img" src={ComunicationImage} alt="Contratar Facilemente" />
        </div>
      </div>
    </section>
  );
};

export default Comunication;
