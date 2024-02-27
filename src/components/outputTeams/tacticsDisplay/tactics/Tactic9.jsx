import React from "react";
import './TacticsN.css';
function Tactic9({players}) {

    return (
        <div className="wrapper">
            <div className="por font">{players[0]}</div>
            <div className="def1 font">{players[1]}</div>
            <div className="def3 font">{players[2]}</div>
            <div className="def5 font">{players[3]}</div>
            <div className="med0 font">{players[4]}</div>
            <div className="med3 font">{players[5]}</div>
            <div className="med6 font">{players[6]}</div>
            <div className="del1 font">{players[7]}</div>
            <div className="del5 font">{players[8]}</div>
        </div>
     )

}
export default Tactic9;