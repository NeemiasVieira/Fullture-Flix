import styled from "styled-components";

export const Container = styled.div`
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    margin: 1vh 1vw;
    text-align: center;
    align-items: center;
    min-height: 55vh;
    color: whitesmoke;
    max-height: 45vh;
    overflow: hidden;
    width: 230px;

    :hover{
        border: 1px solid #e50914;
        cursor: pointer;
    }

    h4{
        margin: 1vh 0;
        color: whitesmoke;
    }
    img{
        max-height: 45vh;
    }


    @media (max-width: 480px){
        width: 65vw;
        margin: 0 17.5vw 2vh 17.5vw;
    }


`