import styled from "styled-components";
import { Link } from "react-router-dom"

export const Error1 = styled(Link)`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 50vw;
        height: 50vh;
        :hover{
            border: 2px solid black;
        }
    }
    button{
        margin-top: 3vh;
        border-radius: 4px;
        background-color: #333;
        color: whitesmoke;
        height: 10vh;
        width: 50vw;
        font-size: large;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        
        :hover{
            background-color: black;
            color: white;
            cursor: pointer;
            text-decoration: none;
        }

    }
`