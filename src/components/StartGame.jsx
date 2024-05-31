
import styled from "styled-components"

const Container=styled.div`
    max-width: 1182px;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 auto;
`
const Button=styled.div`
    padding:10px 18px;
    background-color: #111;
    color:#fff;
    min-width: 220px;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    transition:.5s;
    cursor:pointer;
    &:hover{
        background-color:#fff;
        color:#111;
        border:1px solid black;
        transition:.5s;
    }
`
const Dice=styled.div`
        height:auto;
        width:auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    h1{
        font-size:96px;
        font-weight: 700;
        text-transform:uppercase;
    }
`
const StartGame=({toggle})=>{
    console.log(toggle)
    return (
        <Container>
            <div>
                <img src="../public/dices 1.png" alt="" />
            </div>
            <Dice>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </Dice>
        </Container>
      )
}
  


export default StartGame
