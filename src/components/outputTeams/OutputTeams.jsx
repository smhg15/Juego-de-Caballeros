import React from 'react';
import './OutputTeams.css'
import TacticsDisplay from './tacticsDisplay/TacticsDisplay.jsx';

const teamNames =[
    'El Horacio S.C.', 'Los pechera', 'Tata F.C.', 'Alto Team S.R.L.', 'Que mirá bobo F.C.', 'Cebollitas', 'Es Leviousa H.S.', 'La gran Cuca S.A.', 'Maldito Lunes F.C.', 'Aston Birra', 'El Rejunte', 'Norma Melanzana', 'Vevo Chancha', 'Okama boys'
]

function OutputTeams({playersProp}){
    const playersArray= playersProp
    let counterPlayer= 0 // contador para enumerar y distribuir los jugadores
    const team1=[] // equipo aleatorio 1 
    const team2=[] // equipo aleatorio 2
    const headTable = teamNames.sort(() => { return Math.random() - 0.5 })
    let outputStringified= '' // almacena los dos equipos en un bloque de texto

    // Reordena aleatoriamente el array
    playersArray.sort(() => { return Math.random() - 0.5 });
    // Devuelve dos arrays enumerando cada jugador
    for (let player of playersArray) {
        counterPlayer= counterPlayer+1
        //let numberedplayer= `${counterPlayer} `.concat(player) // enumera los jugadores
        if (counterPlayer%2 === 1) // divide los jugadores entre pares e impares
            team1.push(player)
        else 
            team2.push(player)
    }
        //genera un bloque de texto con la información de los dos equipos y lo guarda en el estado outputStringified
        outputStringified=`TEAM 1:\n\n${team1.toString().replaceAll(',','\n')}\n\n\nTEAM 2:\n\n${team2.toString().replaceAll(',','\n')}`

return(
    
    (playersProp.length>=1 && playersProp.length<=9)?
    alert('...te falta gente maestro...\n (debe ingresar al menos 10 jugadores)')
    :
    <>
    <div className='teamVsTeam'>{teamNames[0]} vs {teamNames[1]}</div>
    <TacticsDisplay team={team1}/>
    <TacticsDisplay team={team2}/>
    </>
)
}

export default OutputTeams