import React, { useState } from 'react';
import './MalditoLunesAppForm.css'
import OutputTeams from './outputTeams/OutputTeams';

function MalditoLunesAppForm() {

    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) //
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])// Only for OneXOneInput

    function handleSubmit(e) {
        // Evita que el navegador actualice la página
        e.preventDefault();
        
        // recupera los datos del formulario
        const form = e.target;
        const formData = new FormData(form);
        const formJson_teamList =Object.fromEntries(formData.entries()).teamList;
        let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')// array de elementos a partir de un bloque de texto. 1ª TRANSFORMACIÓN: eliminación de ',' y renglones vacíos
        
        // 2ª TRANSFORMACIÓN: quita los espacios en blanco y renglones que no incluyan al menos una letra o número
        playersListArray = playersListArray.filter(player => player.match('[a-zA-Z0-9]+'));

        // Guarda la lista de jugadores en el estado playerArray
        setPlayersArray(playersListArray)

    }

    function handlePlayersInput(){
        setFormAllPlayersInput(!formAllPlayersInput)
    }

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
        if (event.target.value!='' && event.target.value.match('[a-zA-Z0-9]+'))
            {setPlayersOneXOneArray([...playersOneXOneArray, event.target.value]);
            event.target.value=''}
      }
    };
    
  return (
    <>
    <p className='component-name'> Component and css name: "Maldito Lunes App Form" </p>
     <section className='section-formAndoutput'>  
    <form 
        className='form' 
        onSubmit={handleSubmit}
    >
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
            name="teamList"
        />
        :
        <table>
        {playersOneXOneArray.map((player,index)=>(
            <tr>
            <td key={index}>
            {index+1}- {player}
            </td>
            <td>
                <button>editar</button>
                <button>eliminar</button>
            </td>
        </tr>
        ))}
    <input 
        type="text"
        onKeyDown={(e) => handleEnterKey(e)}
    /> 
    </table>
        }
        <button type='submit'>
          Make Teams
        </button>
    </form>
    <OutputTeams playersProp={playersArray}/>{/* Lo que se envía por prop es el objeto/atributo 'playersProp' que contiene el objeto 'playersArray' */}
    </section>
    </>
  )
}

export default MalditoLunesAppForm
