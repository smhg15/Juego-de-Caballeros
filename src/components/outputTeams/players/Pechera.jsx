import React from "react";
import './Pechera.css';
import image from '../../../assets/pecheraSF.png';
function Pechera({player, number}){

    return (
        <div className="container">
            <img src={image} className="pechera"/>
            <p className="name font">{player}</p>
            <p className="number font">{number}</p>
        </div>
    )
}

export default Pechera;