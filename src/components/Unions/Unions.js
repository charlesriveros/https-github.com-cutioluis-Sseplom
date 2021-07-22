import React from 'react';
import './Unions.css'

const Unions = (props) => {
    return (
        <section className="seplom-unions">
            <div className="unions-line"></div>
            <span className="unions-title">{props.title}</span>
        </section>
        
    );
};

export default Unions;