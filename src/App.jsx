import { useState } from 'react'
import MalditoLunesAppForm from './components/MalditoLunesAppForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Component name: "App"</h1>
      <MalditoLunesAppForm/>
    </>
  )
}

export default App
