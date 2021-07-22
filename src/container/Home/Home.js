import React from "react";
import "./Home.css";

import Header from "../..//components/Header/Header";
import Explore from "../../components/Explore/Explore";
import Unions from "../../components/Unions/Unions";
import Servicios from "../../components/Servicios/Servicios";
import HireServices from '../../components/HireServices/HireServices'
import Comunication from "../../components/Comunication/Comunication";
import Reviews from "../../components/Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Header />
      <Explore
        title="EXPLORE THE SEPLOM WAY"
      />
      <Unions
        title="Eficiente"
      />
      <Servicios
        title="Hire our services"
        paragraph="Nuestros clientes aman Seplom te ayudamos a solucionar
         muchos problemas que necesites a un precio que se ajuste a tus necesidades"
      />
      <HireServices />
      <Unions
        title="Transparencia"
      />
      <Servicios
        title="Our Comunication"
        paragraph="Nuestros clientes aman Seplom te ayudamos a solucionar muchos problemas que necesites a 
        un precio que se ajuste a tus necesidades"
      />
      <Comunication />
      <Unions
        title="Felices"
      />
      <Servicios
        title="Clientes Satisfehcos"
        paragraph="Con Seplom tendras comunicacion con expertos del nuestra area cualquier
       duda o inquietud comunicate con nuestro equipo"
      />
      <Reviews />
      <Explore
        title="EMPRESAS QUE CONFIARON EN SEPLOM"
      />
    </div>
  );
};

export default Home;
