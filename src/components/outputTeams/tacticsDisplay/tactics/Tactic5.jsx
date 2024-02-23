import React from "react";
import './TacticsN.css';
function Tactic5({players}) {

 return (
    <div className="wrapper">
        <div className="por font">{players[0]}</div>
        <div className="def3 font">{players[1]}</div>
        <div className="med2 font">{players[2]}</div>
        <div className="med4 font">{players[3]}</div>
        <div className="del3 font">{players[4]}</div>
    </div>
 )
}
export default Tactic5;