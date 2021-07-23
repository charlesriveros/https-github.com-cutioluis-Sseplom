import React from "react";
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Logo from "../../../assets/static/seplom-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="seplom-footer">
      <div className="footer-top">
        <ul>
          <b>Nosotros</b>
          <li>Politicas Privacidad</li>
          <li>Reglas de Uso</li>
          <li>Cotizacion</li>
          <li>Rembolso</li>
          <li>Garantia</li>
        </ul>
        <ul>
          <b>Servicios</b>
          <li>Plomeria</li>
          <li>Precios</li>
          <li>Cotizacion</li>
          <li>Contactos</li>
          <li>Unirse</li>
        </ul>
        <ul>
          <b>Servicios</b>
          <li>Plomeria</li>
          <li>Precios</li>
          <li>Cotizacion</li>
          <li>Contactos</li>
          <li>Unirse</li>
        </ul>
        <ul>
          <b>Company</b>
          <li>Home</li>
          <li>Blog</li>
          <li>Seplom Conf</li>
          <li>Parthers</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-bot">
        <Link to="/">
          <img className="logo-footer" src={Logo} alt="Logo Seplom" />        
        </Link>
        <p>Copyright © 2021 Seplom Inc. All rights reserved</p>
        <input
          className="feedback-btn"
          type="text"
          placeholder="Enviar Feedback |"
        />
        <div className="footer-bot-icons">
          <a href="https://www.facebook.com/Plomer%C3%ADa-Inmediata-111753473617169">
            <AiFillFacebook />  
          </a>
          <a href="https://www.instagram.com/plomeria_inmediata/?fbclid=IwAR1aF5nSaz-vzXgvgz_JIIePxt1Bmi6yTAmlIHVQE7cHmZvwN9JAtKTMDmE">
             <AiFillInstagram /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
