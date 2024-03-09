import React from "react";
import './TacticsN.css';
import Pechera from "../../players/Pechera";
function Tactic5({players}) {
    
 return (
    <div className="field">
        <div className="box"><Pechera player={players[0]} number={1}/></div>
        <div className="box"><Pechera player={players[1]} number={2}/></div>
        <div className="box"><Pechera player={players[2]} number={10}/><Pechera player={players[3]} number={8}/></div>
        <div className="box"><Pechera player={players[4]} number={9}/></div>
    </div>
 )
}
export default Tactic5;