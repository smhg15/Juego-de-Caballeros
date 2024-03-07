import React from 'react';
import './OutputTeams.css'
import TacticsDisplay from './tacticsDisplay/TacticsDisplay.jsx';
import languages from '../../languages.jsx'

const teamNames =[
    'El Horacio S.C.', 'Los pechera', 'Tata F.C.', 'Alto Team S.R.L.', 'Que mirá bobo F.C.', 'Cebollitas', 'Es Leviousa H.S.', 'La gran Cuca S.A.', 'Maldito Lunes F.C.', 'Aston Birra', 'El Rejunte', 'Norma Melanzana', 'Vevo Chancha', 'Okama boys'
]

function OutputTeams({playersProp}){

    const lang= languages().tacticsDisplay

    const playersArray= playersProp
    let counterPlayer= 0 // contador para enumerar y distribuir los jugadores
    const team1=[] // equipo aleatorio 1 
    const team2=[] // equipo aleatorio 2
    const asadores=[]
    const headTable = teamNames.sort(() => { return Math.random() - 0.5 })

    playersArray.sort(() => { return Math.random() - 0.5 });

    // Devuelve dos arrays enumerando cada jugador
    for (let player of playersArray) {
        counterPlayer= counterPlayer+1

        if (counterPlayer%2 === 1 && counterPlayer<23) // divide los jugadores entre pares, impares y asadores
            team1.push(player)
        else if (counterPlayer%2 === 0 && counterPlayer<23)
            team2.push(player)
        else
            asadores.push(player)
    }

return(
    <>
        <div className='teamVsTeam'>{teamNames[0]} vs {teamNames[1]}</div>
        <div className='outputTeams'>
            <TacticsDisplay team={team1}/>
            <TacticsDisplay team={team2}/>
        </div>
        {asadores.length>0?
        alert(`${lang.defaultAlert}:\n ${asadores.toString().replaceAll(',','\n')}`)
        :<></>}
    </>
)
}

export default OutputTeams