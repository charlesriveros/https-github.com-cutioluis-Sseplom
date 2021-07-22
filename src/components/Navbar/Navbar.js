import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../assets/static/seplom-logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="seplom-navigation">
        <ul className="navigation-logo">
          <Link to="/">
             <img src={Logo} alt="Seplom" />          
          </Link>
        </ul>
        <ul className="navigation-nav">
          <Link to="/">
            <li>Home</li>          
          </Link>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Blog</li>
        </ul>
        <ul className="navigation-buttons">
          <button className=" btn glow-on-hover" type="button">Contratar</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
