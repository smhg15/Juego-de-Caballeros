import React from "react";
import './TacticsN.css';
function Tactic9({players}) {

    return (
        <div className="field">
            <div className="box"><p className="font">{players[0]}</p></div>
            <div className="box"><p className="font">{players[1]}</p><p className="font">{players[2]}</p><p className="font">{players[3]}</p></div>
            <div className="box"><p className="font">{players[4]}</p><p className="font">{players[5]}</p><p className="font">{players[6]}</p></div>
            <div className="box"><p className="font">{players[7]}</p><p className="font">{players[8]}</p></div>
        </div>
    )

}
export default Tactic9;