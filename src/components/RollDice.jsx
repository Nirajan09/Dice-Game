import React, { useState } from 'react'
import styled from "styled-components"
const RollDice = ({setScore,dicenumber,generaterandomNumber}) => {

const [togle,settogle]=useState(false)

const prev=()=>{
    settogle(!togle)
}

  return (
    <Container>
      <Roll>
        <img src={`../public/dice_${dicenumber}.png`} onClick={generaterandomNumber} alt={`dice${dicenumber}`} />
        <p>Click on dice to roll</p>
      </Roll>
      <div className='buttons'>
        <Button onClick={()=>setScore(0)}>Reset Score</Button> 
        <OutlineButton onClick={prev}>{!togle?"Show":"Hide"} Rules</OutlineButton> 
      </div>
      {togle&&<div className='rules'>
            <h1>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>}
    </Container>
  )
}

export default RollDice

const Container=styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    margin-top:3rem;
    .buttons{
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items:center;
        gap:10px;
    }
    .rules{
        background-color: #FBF1F1;
        margin-top:4rem;
        padding:20px;
    }
    .rules h1{
        margin-bottom:24px;
        font-size:24px;
        font-weight:700;
    }
    .rules p{
        font-size:16px;
        font-weight:500;
        line-height: 24px;
    }
    
`
const Roll=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    img{
        cursor:pointer;
    }
    p{
        font-size:24px;
        font-weight:500;
    }
`
const Button=styled.button`
    padding:10px 18px;
    min-width: 220px;
    height:44px;
    border:1px solid black;
    background-color: white;
    font-weight:600;
    font-size:16px;
    border: 1px solid black;
    transition:.5s;
    cursor:pointer;
    &:hover{
        background-color:#111;
        color:#fff;
        border:1px solid black;
        transition:.5s;
    }
`
const OutlineButton=styled(Button)`
    background-color: black;
    color:#fff;
    border: 1px solid black;
    transition:.5s;
    cursor:pointer;
    &:hover{
        background-color:#fff;
        color:#111;
        border:1px solid black;
        transition:.5s;
    }
`