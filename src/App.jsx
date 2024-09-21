import { useState } from 'react'
import './App.css'
import Inicio from './pages/Inicio'
import Carrusel from './components/Carrusel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio/>
      <Carrusel/>
    </>
  )
}

export default App
