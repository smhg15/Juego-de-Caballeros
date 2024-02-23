import React, { useState, useRef } from 'react';
import './MalditoLunesAppForm.css'
import OutputTeams from './outputTeams/OutputTeams';
import TacticsDisplay from './outputTeams/tacticsDisplay/TacticsDisplay';

const textareaPlaceholder= 'Copy and paste your players listname (each line is one player).\n\n\nExample:\n\nPlayer 1\nPlayer 2\nPlayer 3\nPlayer 4\nPlayer 5\nPlayer 6\nPlayer 7\nPlayer 8\nPlayer 9\nPlayer 10'
function MalditoLunesAppForm() {

    const [isShuffled, setIsShuffled]=useState(false)
    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) //
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])// Only for OneXOneInput
    const ref= useRef(null)
    
    function handleTextareaSubmit() {
    
        const formJson_teamList = document.getElementById('teamList').value
        let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')// array de elementos a partir de un bloque de texto. 1ª TRANSFORMACIÓN: eliminación de ',' y renglones vacíos
        
        // 2ª TRANSFORMACIÓN: quita los espacios en blanco y renglones que no incluyan al menos una letra o número
        playersListArray = playersListArray.filter(player => player.match('[a-zA-Z0-9]+'));

        // Guarda la lista de jugadores en el estado playerArray
        setPlayersArray(playersListArray)
        setIsShuffled(true)
        ref.current.scrollIntoView({behavior: "smooth", block: "start"})

    }
    
    function handleOneXOneSubmit(){
        if (playersOneXOneArray.length >=1)
            {setPlayersArray([...playersOneXOneArray])
            setIsShuffled(true)
            ref.current.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }

    function handlePlayersInput(){
        setFormAllPlayersInput(!formAllPlayersInput)
        setPlayersOneXOneArray([])
        setPlayersArray([])
        setIsShuffled(false)
    }

    function handleEnterKey(event){
        if (event.key === 'Enter') {
            event.preventDefault()
        if (event.target.value!='' && event.target.value.match('[a-zA-Z0-9\u00f1\u00d1]+')){
            setPlayersOneXOneArray([...playersOneXOneArray, event.target.value]);
            event.target.value=''//sirve para limpiar el input
            setPlayersArray([])//sirve para limpiar el outputTeam mientras se cargan nuevos jugadores
            setIsShuffled(false)
        }
      }
    };
    function handleDeleteRow(e, index){
        playersOneXOneArray.splice(index,1)
        setPlayersOneXOneArray([...playersOneXOneArray])
        setPlayersArray([])
        setIsShuffled(false)
    }
    
  return (
    <section className='section'>
        <button 
        onClick={handlePlayersInput}
        className='section__button'
        >
            {formAllPlayersInput
            ?'... OR YOU CAN INSERT PLAYERS ONE X ONE'
            :'... OR YOU CAN INSERT PLAYER LIST'
            }            
        </button>
        {formAllPlayersInput
        ?
        <textarea 
            placeholder={textareaPlaceholder}
            id="teamList"
            className='section__textarea'
        />
        :
        <article className='article'>
            <table className='article__table'>
                <thead>Insert a player name and press "Enter"</thead>
                    {playersOneXOneArray.map((player,index)=>(
                    <tr key={index}>
                        <td key={index}>
                            {index+1}- {player}
                        </td>
                        <td>
                            <button onClick={(e) => handleDeleteRow(e, index)}>Delete</button>
                        </td>
                    </tr>
                    ))}
            </table>
            <input
            type="text"
            onKeyDown={(e) => handleEnterKey(e)}
            maxLength='25'
            /> 
        </article>
        }
        <button 
        type='button'
        onClick={formAllPlayersInput?handleTextareaSubmit:handleOneXOneSubmit}
        className='section__button'
        ref={ref}
        >
          {isShuffled?'shuffle again':'Make Teams'}
        </button>    
    <OutputTeams playersProp={playersArray}/>{/*se envía un array*/}
    </section>
  )
}

export default MalditoLunesAppForm
