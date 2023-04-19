import styled from "styled-components";


export const FooterHome = styled.div`
    
background-color: #000;
color: gray;
font-family: sans-serif;
font-weight: 600;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid gray;
padding: 20px 0;
font-size: 2.8vh;
margin: 7vh 0 0 0;


@media (max-width: 480px){
    font-size: 1.2em;
}

`

export const FooterDetails = styled.div`

background: #111;
color: whitesmoke;
border-top: solid 3px #222;
font-family: sans-serif;
font-weight: 600;
height: 70px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.8vh;
width: 100vw;


@media (max-width: 480px){
    margin-top: 33.2vh;
    font-size: 1em;
}
`