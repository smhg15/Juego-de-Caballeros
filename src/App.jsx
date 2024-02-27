import React from 'react'
import './App.css'
import MalditoLunesAppForm from './components/MalditoLunesAppForm'
import Translate from './components/Translate'
import languages from './languages'


function App() {
  const lang = languages().app
  return (
    <div className='app'>
      <Translate/>
      <h1 className='app__title'>Juego de Caballeros<br/>{lang.h1}</h1>
      <MalditoLunesAppForm/>
      <footer className='app__footer'>#FreePlayerCodefy</footer>
    </div>
  )
}

export default App
