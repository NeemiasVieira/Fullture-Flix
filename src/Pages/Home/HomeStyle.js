import styled from "styled-components";
import bgimage from "../../assets/img/fullflix.jpeg"
import {Link} from "react-router-dom"


export const Headerdiv = styled.div`
    background-image: url(${bgimage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    height: 100vh;
    color: whitesmoke;

    @media (max-width: 480px){
        height: 40vh;
    }
    
    
    `

export const Catalogue = styled(Link)`



    display: grid;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 90vh;
    gap: 1vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    h2{
        margin: 0;
        display: flex;
        position: relative;
        left: 50px;
        max-width: 50vw;
    }



    `

    export const HomeTitle = styled.div`
    
    h2{
        color: whitesmoke;
        margin: 0 0 7vh 0;
        justify-content: center;
        display: flex;
        position: relative;
        min-width: 100%;
    }
    `

export const Father = styled.div`
    background-color: rgb(10, 10, 10);
    max-width: 100vw;
`
