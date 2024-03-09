import { useSelector} from 'react-redux'

function languages(){
    
    const lang=useSelector((state) => state.language.value)
    let language={}
    
if (lang == 'spanish'){
    language={
        app:{
            h1:'(Arma tus equipos)',
        },
        malditoLunesTemplate:{
            incompleteTeamAlert:'Debe ingresar al menos 10 jugadores',
            textareaAlertDuplicated:'Ha ingresado dos jugadores con el mismo nombre.',
            oneXOneInputAlertDuplicated:'Ya ha ingresado a ese jugador',
            inputPlayersButton:{
                toOneXOneInput:'Presione aquí para ingresar jugador x jugador',
                toListForm:'Presione aquí para ingresar una lista de jugadores',
            },
            textareaPlaceholder:'Copia y pega la lista de jugadores (cada renglón corresponde a 1 jugador).\n\n\nEjemplo:\n\nJugador 1\nJugador 2\nJugador 3\nJugador 4\nJugador 5\nJugador 6\nJugador 7\nJugador 8\nJugador 9\nJugador 10',
            oneXOneInputTableHead:'Ingrese el nombre y presione "Enter"(debe contener al menos una letra o número)',
            makeTeamButton:{
                isShuffled:'MEZCLAR NUEVAMENTE',
                isNotShuffled:'ARMAR EQUIPOS',
            }
        },
        tacticsDisplay:{
            defaultAlert:'Suplentes: '
        }
    }
}
else if (lang == 'cordobés'){
    language={
        app:{
            h1:'(Pan y queso)',
        },
        malditoLunesTemplate:{
            incompleteTeamAlert:'que queré inventá!?, cómo va a jugar con menos de 10!?!?',
            textareaAlertDuplicated:'hay un gil que está anotado dos veces, mínimo...',
            oneXOneInputAlertDuplicated:'Hermano, lo acabá de anotá a ese!!. ¿Queré que te consiga uno?',
            inputPlayersButton:{
                toOneXOneInput:'Acá tocá para anotar uno x uno',
                toListForm:'Tocá acá para cargar la playlist del team',
            },
            textareaPlaceholder:'Copiá y pegá la lista de la banda, así como viene del Wasap (meté un player X renglón).\n\n\nTe tiene que quedá así:\n\nPrimero La Mona\nSegundo Francia\nRomán\nCachumba (que es como el doble de riesgo de La Mona)\nEsquiareti\nEl Guapachoso\nZlatan Ibrahimović\nEl gorrita\nEl que se pone la gorra\nEl gorriao',
            oneXOneInputTableHead:'Escribí el nombre y tocá el "Enter" (poné algo que se pueda pronunciá)',
            makeTeamButton:{
                isShuffled:'DA OCOTE EL TEAM: LO ARMEMO DE NUEVO',
                isNotShuffled:'ARMEMO LOS EQUIPO',
            }
        },
        tacticsDisplay:{
            defaultAlert:'Asadores: '
        }
    }
}
else {
    language={
        app:{
            h1:'(Team Maker)',
        },
        malditoLunesTemplate:{
            incompleteTeamAlert:'The players list must contain at least 10 players',
            textareaAlertDuplicated:'There are at least two players with the same name.',
            oneXOneInputAlertDuplicated:'This player has already been added to the list.',
            inputPlayersButton:{
                toOneXOneInput:'PRESS TO INSERT PLAYERS ONE X ONE',
                toListForm:'PRESS TO INSERT PLAYERS LIST'
            },
            textareaPlaceholder: 'Copy and paste your players listname (each line is one player).\n\n\nExample:\n\nPlayer 1\nPlayer 2\nPlayer 3\nPlayer 4\nPlayer 5\nPlayer 6\nPlayer 7\nPlayer 8\nPlayer 9\nPlayer 10',
            oneXOneInputTableHead:'Insert a player name and press "Enter" ( the name must contain at least one letter or number)',
            makeTeamButton:{
                isShuffled:'SHUFFLE AGAIN',
                isNotShuffled:'MAKE TEAMS',
            }
        },
        tacticsDisplay:{
            defaultAlert:'Subtitutes: '
        }
    }
}

return(language)

}

export default languages;