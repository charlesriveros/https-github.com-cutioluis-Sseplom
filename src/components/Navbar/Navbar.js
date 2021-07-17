import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/static/seplom-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="seplom-navigation">
        <ul className="navigation-logo">
          <img src={Logo} alt="Seplom" />
        </ul>
        <ul className="navigation-nav">
          <li>Home</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Blog</li>
        </ul>
        <ul className="navigation-buttons">
          <button class=" btn glow-on-hover" type="button">Contratar</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
