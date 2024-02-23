import React from 'react'
import Tactic5 from './tactics/Tactic5.jsx'
import Tactic6 from './tactics/Tactic6.jsx'
import Tactic7 from './tactics/Tactic7.jsx'
import Tactic8 from './tactics/Tactic8.jsx'
import Tactic9 from './tactics/Tactic9.jsx'
import Tactic10 from './tactics/Tactic10.jsx'
import Tactic11 from './tactics/Tactic11.jsx'
 function TacticsDisplay({team}){

    let tactic = <></>

    switch(team.length){
        case 5:
            tactic= <Tactic5 players={team}/>
            break
        case 6:
            tactic= <Tactic6 players={team}/>
            break
        case 7:
            tactic= <Tactic7 players={team}/>
            break
        case 8:
            tactic= <Tactic8 players={team}/>
            break
        case 9:
            tactic=  <Tactic9 players={team}/>
            break
        case 10:
            tactic= <Tactic10 players={team}/>
            break
        case 11:
            tactic= <Tactic11 players={team}/>
            break
        case team.length <=4:
            tactic= <Tactic11 players={team}/>
            break
        case team.length >=12:
            tactic= <Tactic11 players={team}/>
            break
        
    }   
    return(<>{tactic}</>)
}

export default TacticsDisplay