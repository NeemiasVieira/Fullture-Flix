import Error401 from "../../assets/img/error401.png"
import { Error1 } from "./Error404Style";
import React from "react";

function Error404(){

    return(
        <Error1 to="/">
        <img src={Error401} alt="Imagem de erro"></img>
        <button>Go back to home</button>
        </Error1>
    )

}

export default Error404;