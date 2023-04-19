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

background-color: #222;
color: whitesmoke;
font-family: sans-serif;
font-weight: 600;
height: 70px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.8vh;


@media (max-width: 480px){
    font-size: 1.2em;
}
`