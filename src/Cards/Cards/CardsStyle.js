import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    margin: 1vh 1vw;
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 55vh;
    color: whitesmoke;
    max-height: 45vh;
    overflow: hidden;
    width: 240px;
    text-decoration: none;

    :hover{
        border: 1px solid #e50914;
        cursor: pointer;
    }

    h4{
        margin: 1vh 0;
        padding: 1vh;
        color: whitesmoke;
    }
    img{
        max-height: 45vh;
        min-width: 240px;
    }


    @media (max-width: 480px){
        width: 65vw;
        margin: 0 17.5vw 2vh 17.5vw;
    }


`