import React from 'react'
import Tactic5 from './tactics/Tactic5.jsx'
import Tactic6 from './tactics/Tactic6.jsx'
import Tactic7 from './tactics/Tactic7.jsx'
import Tactic8 from './tactics/Tactic8.jsx'
import Tactic9 from './tactics/Tactic9.jsx'
import Tactic10 from './tactics/Tactic10.jsx'
import Tactic11 from './tactics/Tactic11.jsx'
import languages from '../../../languages.jsx'


function TacticsDisplay({team}){
    
    const lang= languages().tacticsDisplay
    
    let tactic = <></>

    switch(true){

        case team.length==0 || team[0]=='':
            break
        case team.length==5:
            tactic= <Tactic5 players={team}/>
            break
        case team.length==6:
            tactic= <Tactic6 players={team}/>
            break
        case team.length==7:
            tactic= <Tactic7 players={team}/>
            break
        case team.length==8:
            tactic= <Tactic8 players={team}/>
            break
        case team.length==9:
            tactic=  <Tactic9 players={team}/>
            break
        case team.length==10:
            tactic= <Tactic10 players={team}/>
            break
        case team.length==11:
            tactic= <Tactic11 players={team}/>
            break
        default:
            tactic= <><Tactic11 players={team}/>{alert(`${team[11]} ${lang.defaultAlert}`)}</>
            break
        
    }   
    return(<>{tactic}</>)
}

export default TacticsDisplay