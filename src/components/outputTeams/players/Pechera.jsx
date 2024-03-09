import React from "react";
import './Pechera.css';
import pechera from '../../../assets/pecheraSF.png';
import pechera2 from '../../../assets/pecheraSF2.png';


function obtenerName(player) {
    let playerName = player.match(/[a-zA-Z].*/);
    return playerName ? playerName[0] : '';
  }

  function usaPechera(player) {
    let esPar = player.slice(0, 2)
    if (esPar%2 === 0)
        return pechera2
    else
        return pechera
  }  

function Pechera({player, number}){

    let playerName= obtenerName(player)
    let image= usaPechera(player)
    return (
        <div className="container">
            <img src={image} className="pechera"/>
            <p className="name font">{playerName}</p>
            <p className="number font">{number}</p>
        </div>
    )
}

export default Pechera;