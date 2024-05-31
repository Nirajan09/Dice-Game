import React from 'react'
import styled from "styled-components"
// const Container=styled.div`
//     
// `
const Left=styled.div`
    max-width:135px;
    max-height:151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size:100px;
        line-height:90px;
    }
    height{
        font-size:24px;
        font-weight:500;
    };

`


const TotalScore = ({score}) => {
    
  return (
    <div>
        <Left>
            <h1>{score}</h1>
            <h3>Total Score</h3>
        </Left>
        
    </div>
  )
}

export default TotalScore
