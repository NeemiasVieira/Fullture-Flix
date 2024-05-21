import styled from "styled-components";
import bgimage from "../../assets/img/fullflix.jpeg"



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

export const Catalogue = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 35px;

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
        margin: 0 0 7vh 3vw;
        font-weight: 900;
        display: flex;
        position: relative;
        min-width: 100%;
    }

    @media (max-width: 480px){
        h2{
            font-size: 1.2em;
            justify-content: center;
            margin: 0 0 7vh 0;
        }
    }
    `

export const Father = styled.div`
    background-color: rgb(10, 10, 10);
    max-width: 100vw;
`
