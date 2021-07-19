import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Logo from "../../assets/static/seplom-logo.png";
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
        <img className="logo-footer" src={Logo} alt="Logo Seplom" />
        <p>Copyright © 2021 Seplom Inc. All rights reserved</p>
        <input
          className="feedback-btn"
          type="text"
          placeholder="Enviar Feedback |"
        />
        <div className="footer-bot-icons">
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
