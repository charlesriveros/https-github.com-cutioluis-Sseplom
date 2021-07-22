import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="seplom-notfound">
            <h1 className="notfound-title">Not Found</h1>
            <p className="notfound-paragraph">Lo sentimos no encontramos lo que buscabas</p>
            <Link to="/">
              <button className="btn glow-on-hover">Volver al Inicio</button>            
            </Link>
        </div>
    );
};

export default NotFound;