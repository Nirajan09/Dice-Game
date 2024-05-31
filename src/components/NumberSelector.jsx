import React, { useState } from 'react'
import styled from "styled-components"
const Right=styled.div`
    max-width:552px;
    h6{
        text-align:right;
        margin-top:15px;
        font-size:24px;
        font-weight:700;
    }
    p{
        color:red;
        font-size:24px;
        font-weight:700;
        text-align:right;
        margin-bottom: 10px;
    }
`
const Button=styled.button`
    width:72px;
    height:72px;
    margin:0 10px;
    font-size:24px;
    font-weight:700;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>!props.isSelected?"black":"white"};
    transition: .5s;
    &:hover{
        background-color: #111;
        color:#fff;
        cursor:pointer;
        transition:.5s;
    }
`

const NumberSelector = ({seterror,error,number,setnumber}) => {
    const array=[1,2,3,4,5,6]
    
    const errorhandler=(value)=>{
        setnumber(value)
        seterror("")
    }
        
    
  return (
    <Right>
            <p>{error}</p>
            {
                array.map((value,index)=>{
                    return <Button key={index} onClick={()=>errorhandler(value)}
                    isSelected={number===value}
                    >{value}</Button>
                })
            }
            <h6>Select Number</h6>
        </Right>
  )
}

export default NumberSelector
