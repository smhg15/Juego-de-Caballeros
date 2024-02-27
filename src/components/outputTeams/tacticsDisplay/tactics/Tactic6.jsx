import React from "react";
import './TacticsN.css';
function Tactic6({players}) {

    return (
        <div className="wrapper">
            <div className="por font">{players[0]}</div>
            <div className="def1 font">{players[1]}</div>
            <div className="def5 font">{players[2]}</div>
            <div className="med3 font">{players[3]}</div>
            <div className="del1 font">{players[4]}</div>
            <div className="del5 font">{players[5]}</div>
        </div>
     )

}
export default Tactic6;