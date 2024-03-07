import React from "react";
import './TacticsN.css';
import Pechera from "../../players/Pechera";
function Tactic10({players}) {

    return (
        <div className="field">
            <div className="box"><Pechera player={players[0]} number={1}/></div>
            <div className="box"><Pechera player={players[1]} number={3}/><Pechera player={players[2]} number={2}/><Pechera player={players[3]} number={6}/><Pechera player={players[4]} number={4}/></div>
            <div className="box"><Pechera player={players[5]} number={8}/><Pechera player={players[6]} number={5}/><Pechera player={players[7]} number={10}/></div>
            <div className="box"><Pechera player={players[8]} number={7}/><Pechera player={players[9]} number={9}/></div>
        </div>
    )

}
export default Tactic10;