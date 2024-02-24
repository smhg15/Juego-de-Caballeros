import React from 'react'
import './App.css'
import MalditoLunesAppForm from './components/MalditoLunesAppForm'
function App() {

  return (
    <div className='app'>
      <h1 className='app__title'>Juego de Caballeros<br/>(teams maker)</h1>
      <MalditoLunesAppForm/>
      <footer className='app__footer'>#FreePlayerCodefy</footer>
    </div>
  )
}

export default App
