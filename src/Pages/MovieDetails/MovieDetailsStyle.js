import styled from "styled-components";

export const Detalhes = styled.div`
    display: flex;
    flex-flow: row wrap;
    justfiy-content: center;    
    margin: 5vh 5vw 0 5vw;
    background-color: #ccc;
    border: 2px solid black;
    max-width: 1000px;

    img{
        width: 55vw;
        height: 85vh;
        max-width: 550px;
    }

    div{
        width: 20vw;
        max-width: 300px;
        height: 81vh;
        padding: 2vh 0 2vh 4vw;
    }

    button{
        margin-top: 25vh;
        margin-left: 2vw;
        max-width: 250px;
        width: 20vw;
        height: 4vh;
        background-color: white;
        color: black;
        font-weight: 700;
        font-size: 1.2em;
        border-radius: 10px;
        border: solid black 1px;
        cursor: pointer;
        transition: all 200ms;
        :hover{
            color: white;
            background-color: black;
        }
    }

`
