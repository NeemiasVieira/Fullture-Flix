import styled from "styled-components";

export const Detalhes = styled.div`
    display: flex;
    flex-flow: row wrap;   
    margin-top: 5vh;
    margin-bottom: 5.1vh;
    background-color: rgba(40,40,40,1);
    border: 2px solid #444;
    max-width: 1280px;
    min-width: 600px;
    color: whitesmoke;   

    img{
        width: 30vw;
        height: 80vh;
        max-width: 400px;
        border-right: solid black 2px;
    }

  
    button{
        justify-self: flex-end;
        background: rgb(229, 9, 20);
        max-width: 250px;
        width: 300px;
        height: 5vh;
        color: #ccc;
        font-weight: 500;
        font-size: 1.2em;
        border-radius: 10px;
        cursor: pointer;
        transition: all 500ms;
        border: solid rgb(229, 9, 20) 1px;
        :hover{
            color: white;
            background: rgb(193, 17, 25);
            border: solid rgb(193, 17, 25) 1px;
            transform: scale(1.02);
        }
    }

    @media (max-width: 480px){
        justfiy-content: center;    
        margin-top: 2vh;
        margin-bottom: 5.1vh;
        background-color: rgba(40,40,40,1);
        border: 2px solid #444;
        color: whitesmoke;
        font-size: 0.7em;
        min-width: 300px;
        height: 50vh;
        

        img{
            width: 50vw;
            height: 50vh;
        }


        button{
            width: 30vw;
            height: 4vh;
            font-size: 1em;
        }
    }

`

export const MovieDetails = styled.section`

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: black;
    overflow-x: hidden;

    @media (max-width: 480px){
        width: 100vw;
        height: 100vh;
        justify-content: initial;
        

    }

`

export const Data = styled.div`

width: 70vw;
max-width: 300px;
height: 80vh;
padding: 0 1.5vw;
display: flex;
flex-flow: column wrap;
justify-content: space-between;

p:nth-child(2){
    text-overflow: ellipsis;
    max-height: 400px;
    overflow-y: hidden;
}

button{
    margin-left: 26px;
    margin-bottom: 20px;    
}


@media (max-width: 480px){
    width: 40vw;
    max-width: 300px;
    height: 50vh;
    padding: 0 2vw;
}

button{
    margin-left: 22.5px  
}

`