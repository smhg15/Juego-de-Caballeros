import React, { useState, useRef } from 'react';
import './MalditoLunesAppForm.css'
import OutputTeams from './outputTeams/OutputTeams';
import languages from '../languages'



function MalditoLunesAppForm() {
    
    const lang = languages().malditoLunesAppForm
    const [isShuffled, setIsShuffled]=useState(false)
    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) //
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])// Only for OneXOneInput
    const ref= useRef(null)
    
    function handleTextareaSubmit() {

    
        const formJson_teamList = document.getElementById('teamList').value
        if (formJson_teamList != '') {
            let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')// array de elementos a partir de un bloque de texto. 1ª TRANSFORMACIÓN: eliminación de ',' y renglones vacíos
            
            // 2ª TRANSFORMACIÓN: quita los espacios en blanco y renglones que no incluyan al menos una letra o número
            playersListArray = playersListArray.filter(player => player.match('[a-zA-Z0-9]+'));
            const hasDuplicates = array => new Set(array).size < array.length
            if (playersListArray.length <10) {
                alert(lang.incompleteTeamAlert)
            }
            else if (hasDuplicates(playersListArray) == true) {
                alert(lang.textareaAlertDuplicated)
            }
                
            else {            
                // Guarda la lista de jugadores en el estado playerArray
                setPlayersArray(playersListArray)
                setIsShuffled(true)
                ref.current.scrollIntoView({behavior: "smooth", block: "start"})
            }
        }  
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
        if (event.target.value!='' && event.target.value.match('[a-zA-Z0-9\u00f1\u00d1]+')) {

            if (playersOneXOneArray.includes(event.target.value)==false){
                setPlayersOneXOneArray([...playersOneXOneArray, event.target.value]);
                event.target.value=''//sirve para limpiar el input
                setPlayersArray([])//sirve para limpiar el outputTeam mientras se cargan nuevos jugadores
                setIsShuffled(false)
            }
            else {
                alert(lang.oneXOneInputAlertDuplicated)
            }
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
        className='section__button font'
        >
            {formAllPlayersInput
            ? lang.inputPlayersButton.toOneXOneInput
            : lang.inputPlayersButton.toListForm
            }            
        </button>
        {formAllPlayersInput
        ?
        <textarea 
            placeholder={lang.textareaPlaceholder}
            id="teamList"
            className='section__textarea font' 
        />
        :
        <article className='article'>
            <table className='article__table'>
                <thead className='font'>{lang.oneXOneInputTableHead}</thead>
                    {playersOneXOneArray.map((player,index)=>(
                    <tr key={index}>
                        <td className= 'font' key={index}>
                            {index+1}- {player}
                        </td>
                        <td>
                            <button className='section__button font' onClick={(e) => handleDeleteRow(e, index)}>Delete</button>
                        </td>
                    </tr>
                    ))}
            </table>
            <input
            type="text"
            onKeyDown={(e) => handleEnterKey(e)}
            maxLength='25'
            className='article__input'
            /> 
        </article>
        }
        <button 
        type='button'
        onClick={formAllPlayersInput?handleTextareaSubmit:handleOneXOneSubmit}
        className='section__button font'
        ref={ref}
        >
          {isShuffled? lang.makeTeamButton.isShuffled:lang.makeTeamButton.isNotShuffled}
        </button>    
    <OutputTeams playersProp={playersArray}/>{/*se envía un array*/}
    </section>
  )
}

export default MalditoLunesAppForm
