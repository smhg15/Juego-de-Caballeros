import React from "react";
import './TacticsN.css';
import Pechera from "../../players/Pechera";
function Tactic6({players}) {

    return (
        <div className="field">
            <div className="box"><Pechera player={players[0]} number={1}/></div>
            <div className="box"><Pechera player={players[1]} number={2}/><Pechera player={players[2]} number={6}/></div>
            <div className="box"><Pechera player={players[3]} number={5}/></div>
            <div className="box"><Pechera player={players[4]} number={9}/><Pechera player={players[5]} number={10}/></div>
        </div>
    )

}
export default Tactic6;