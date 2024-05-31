import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from "styled-components"
import RollDice from './RollDice'
import { useState } from 'react'
const Gameplay = () => {
    const [score,setScore]=useState(0)
    const [dicenumber,setdicenumber]=useState(1)
    const [number,setnumber]=useState()
    const [error,seterror]=useState("")
    const generaterandomNumber=()=>{
        if(!number){
            seterror("You have not selected any number")
            return;
        };
        seterror("")
        const random=Math.floor(Math.random()*6)+1
        setdicenumber(random)
        
        (random===number?setScore((prev)=>prev+random):setScore((prev)=>prev-2))
        setnumber(undefined)
    }

    
  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore setScore={setScore} score={score}/>
        <NumberSelector seterror={seterror} error={error} number={number} setnumber={setnumber}/>
        </div>
           <RollDice setScore={setScore} score={score} dicenumber={dicenumber} generaterandomNumber={generaterandomNumber}/>
    </MainContainer>
        
    
  )
}

export default Gameplay

const MainContainer=styled.main`
    margin:2rem auto;
    
    .top_section{
        display:flex;
        justify-content:space-around;
        max-width:1280px;
        
    }
`

