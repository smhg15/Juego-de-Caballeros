import { useState } from 'react'
import MalditoLunesAppForm from './components/MalditoLunesAppForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App-h1: Juego de Caballeros (teams maker)</h1>
      <MalditoLunesAppForm/>
      <footer>App-footer: Santi Torres Design & FreePlayerCodefy</footer>
    </>
  )
}

export default App
