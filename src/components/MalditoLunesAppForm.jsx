import React, { useState } from 'react';
import './MalditoLunesAppForm.css'
import OutputTeams from './outputTeams/OutputTeams';

function MalditoLunesAppForm() {
    const [isShuffled, setIsShuffled]=useState(false)
    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) //
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])// Only for OneXOneInput

    function handleTextareaSubmit() {
        
        const formJson_teamList = document.getElementById('teamList').value
        let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')// array de elementos a partir de un bloque de texto. 1ª TRANSFORMACIÓN: eliminación de ',' y renglones vacíos
        
        // 2ª TRANSFORMACIÓN: quita los espacios en blanco y renglones que no incluyan al menos una letra o número
        playersListArray = playersListArray.filter(player => player.match('[a-zA-Z0-9]+'));

        // Guarda la lista de jugadores en el estado playerArray
        if (playersListArray.length >=1)
        {setPlayersArray(playersListArray)
        setIsShuffled(true)}

    }
    
    function handleOneXOneSubmit(){
        if (playersOneXOneArray.length >=1)
            {setPlayersArray([...playersOneXOneArray])
            setIsShuffled(true)}
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
    <>
     <section className='section-formAndoutput'>
        <div className='form'>
        <button 
        onClick={handlePlayersInput}>
            {formAllPlayersInput
            ?'... OR YOU CAN INSERT PLAYERS ONE X ONE'
            :'... OR YOU CAN INSERT PLAYER LIST'
            }
        </button>
        {formAllPlayersInput
        ?
        <textarea 
            className='form-input-box' 
            placeholder='insert players listname (one player x line without line spacing)'
            id="teamList"
        />
        :
        <table>
        {playersOneXOneArray.map((player,index)=>(
            <tr>
            <td key={index}>
            {index+1}- {player}
            </td>
            <td>
                <button onClick={(e) => handleDeleteRow(e, index)}>Delete</button>
            </td>
        </tr>
        ))}
    <input 
        type="text"
        onKeyDown={(e) => handleEnterKey(e)}
        pattern='[a-zA-Z0-9\u00f1\u00d1]'
        placeholder='insert player and press "enter"'
    /> 
    </table>
        }
        <button type='button'onClick={formAllPlayersInput?handleTextareaSubmit:handleOneXOneSubmit}>
          {isShuffled?'shuffle again':'Make Teams'}
        </button>
        </div>
    <OutputTeams playersProp={playersArray}/>{/*se envía un array*/}
    </section>
    </>
  )
}

export default MalditoLunesAppForm
