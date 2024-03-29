import React, { useState, useRef } from 'react';
import './MalditoLunesTemplate.css'
import OutputTeams from './outputTeams/OutputTeams';
import languages from '../languages'
import DeleteRoundedIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function MalditoLunesTemplate() {
    
    const lang = languages().malditoLunesTemplate
    const [isShuffled, setIsShuffled]=useState(false)
    const [formAllPlayersInput, setFormAllPlayersInput]=useState(true)
    const [playersArray, setPlayersArray]=useState([]) 
    const [playersOneXOneArray, setPlayersOneXOneArray]=useState([])
    const ref= useRef()
    const oneXoneInput=useRef()
    const textareaInput=useRef()
    
    function handleKey(){
        textareaInput.current.value = textareaInput.current.value.toUpperCase()
    }
    function obtenerName(player) {
        let playerName = player.match(/[a-zA-Z].*/);
        return playerName ? playerName[0] : '';
      }
    function handleTextareaSubmit() {

    
        const formJson_teamList = textareaInput.current.value
        if (formJson_teamList != '') {
            let playersListArray= formJson_teamList.replaceAll(',',';').split('\n')
            playersListArray = playersListArray.filter(player => player.match('[a-zA-Z]+'))

            //Control de jugadores duplicados
            const controlDuplicates = playersListArray.map(player => obtenerName(player))
            const hasDuplicates = array => new Set(array).size < array.length
            if (playersListArray.length <10) {
                alert(lang.incompleteTeamAlert)
            }
            else if (hasDuplicates(controlDuplicates) == true) {
                alert(lang.textareaAlertDuplicated)
            }
                
            else {            
                setPlayersArray(playersListArray)
                setIsShuffled(true)
                setTimeout(() => {
                    ref.current.scrollIntoView({behavior: "smooth", block: "start"})
                  }, 100);
                
            }
        }  
    }
    
    function handleOneXOneSubmit(){
        if (playersOneXOneArray.length <10) {
            alert(lang.incompleteTeamAlert)
        }
        else {
            setPlayersArray([...playersOneXOneArray])
            setIsShuffled(true)
            setTimeout(() => {
                ref.current.scrollIntoView({behavior: "smooth", block: "start"})
              }, 100);
        }
    }

    function handlePlayersInput(){
        setFormAllPlayersInput(!formAllPlayersInput)
        setPlayersOneXOneArray([])
        setPlayersArray([])
        setIsShuffled(false)
    }

    function handleEnterKey(event){

        //Controla que el primer caracter coincida con una letra
        let controlFirstCharacter = false
        if (controlFirstCharacter === false && event.target.value.match('[a-zA-Z\u00f1\u00d1]+')){
            controlFirstCharacter = true
        }
        else {
            alert(lang.checkFirstCharacter)
            oneXoneInput.current.value = ''
        }
        //
        oneXoneInput.current.value = oneXoneInput.current.value.toUpperCase()

        if (event.key === 'Enter') {
            event.preventDefault()
        if (event.target.value!='' && event.target.value.match('[A-Z0-9\u00d1]+')) {
            if (playersOneXOneArray.includes(event.target.value)==false){
                setPlayersOneXOneArray([...playersOneXOneArray, event.target.value]);
                event.target.value=''
                setPlayersArray([])
                setIsShuffled(false)
                controlFirstCharacter = false
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
            onKeyUp={(e) => handleKey(e)}
            ref={textareaInput}
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
                            <IconButton aria-label="delete" onClick={(e) => handleDeleteRow(e, index)}>
                                <DeleteRoundedIcon sx={{color:'#191919'}}/>
                            </IconButton>
                        </td>
                    </tr>
                    ))}
            </table>
            <input
            type="text"
            onKeyUp={(e) => handleEnterKey(e)}
            maxLength='25'
            className='article__input'
            ref={oneXoneInput}
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
    <OutputTeams playersProp={playersArray}/>
    </section>
  )
}

export default MalditoLunesTemplate
