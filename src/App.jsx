import './App.css'
import styled from "styled-components"
import StartGame from './components/StartGame'

import { useState } from 'react'
import Gameplay from './components/Gameplay'
function App() {
  const [previous,setprevious]=useState(false)

    const togglefunction=()=>{
        setprevious((previous)=>!previous)
    }
  return (
   <div>
    {!previous?<StartGame toggle={togglefunction}/>:<Gameplay/>}
   </div>
      
    
  )
}

export default App
