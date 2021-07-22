import React from "react";
import HireImage from "../../assets/static/seplom-hire.png";
import "./HireServices.css";

const HireServices = () => {
  return (
    <section className="seplom-hire">
      <div className="hire__container">
        <div className="container__container-left">
          <img src={HireImage} alt="Contratar Facilemente" />
        </div>
        <div className="container__container-rigth">
          <article className="rigth-article">
            <h3>Super Rapido</h3>
            <p>Operamos 24/7 con rapidez en todos nuestros servicios</p>
          </article>
          <article className="rigth-article">
            <h3>Pagos Flexibles</h3>
            <p>Ofrecemos palzos de pago </p>
          </article>
          <article className="rigth-article">
            <h3>Garantia</h3>
            <p>
              Ofrecemos una garantia contra daños ocasionados por el plomero{" "}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HireServices;
