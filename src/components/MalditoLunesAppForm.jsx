import React, { useState } from 'react';
import './MalditoLunesAppForm.css'
import OutputTeams from './outputTeams/OutputTeams';

function MalditoLunesAppForm() {

    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) //
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])// Only for OneXOneInput

    function handleTextareaSubmit() {
        
        const formJson_teamList = document.getElementById('teamList').value
        let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')// array de elementos a partir de un bloque de texto. 1ª TRANSFORMACIÓN: eliminación de ',' y renglones vacíos
        
        // 2ª TRANSFORMACIÓN: quita los espacios en blanco y renglones que no incluyan al menos una letra o número
        playersListArray = playersListArray.filter(player => player.match('[a-zA-Z0-9]+'));

        // Guarda la lista de jugadores en el estado playerArray
        setPlayersArray(playersListArray)

    }
    
    function handleOneXOneSubmit(){
        
        setPlayersArray([...playersOneXOneArray])
    }

    function handlePlayersInput(){
        setFormAllPlayersInput(!formAllPlayersInput)
        setPlayersArray([])
    }

    function handleEnterKey(event){
        if (event.key === 'Enter') {
            event.preventDefault()
        if (event.target.value!='' && event.target.value.match('[a-zA-Z0-9]+')){
            setPlayersOneXOneArray([...playersOneXOneArray, event.target.value]);
            event.target.value=''//sirve para limpiar el input
            setPlayersArray([])//sirve para limpiar el outputTeam mientras se cargan nuevos jugadores
        }
      }
    };
    function handleDeleteRow(e, index){
        playersOneXOneArray.splice(index,1)
        setPlayersOneXOneArray([...playersOneXOneArray])
        console.log(playersOneXOneArray)
    }
    
  return (
    <>
    <p className='component-name'> Component and css name: "Maldito Lunes App Form" </p>
     <section className='section-formAndoutput'>  
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
    /> 
    </table>
        }
        <button type='button'onClick={formAllPlayersInput?handleTextareaSubmit:handleOneXOneSubmit}>
          Make Teams
        </button>
    <OutputTeams playersProp={playersArray}/>{/*se envía un array*/}
    </section>
    </>
  )
}

export default MalditoLunesAppForm
