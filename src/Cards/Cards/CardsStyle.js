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
    height: 420px;  
    color: whitesmoke;
    overflow: hidden;
    width: 240px;
    text-decoration: none;
    border-radius: 10px 10px 0 0;
    background-color: #111;

    :hover{
        border: 1px solid #e50914;
        cursor: pointer;
    }

    h4{
        margin: 5px 0;
        padding: 10px;
        color: #ddd;
        font-weight: 400;
        font-style: italic;
    }
    img{
        height: 350px;
        min-width: 240px;
    }


    @media (max-width: 480px){
        width: 65vw;
        margin: 0 17.5vw 2vh 17.5vw;
    }


`