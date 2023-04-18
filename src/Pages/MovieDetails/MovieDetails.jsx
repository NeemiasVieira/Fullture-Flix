import { Footer } from "../../Cards/Footer/Footer";
import { Header } from "../../Cards/Header/Header";
import { Grid, MainContainer, RigthSide } from "./MovieDetailsStyle";
import {Link} from 'react-router-dom'
import React from "react";



function Details() {
  return (
    <div>
        <h1>Page in construction</h1>
        <Link to="/"> <button>Back to home</button> </Link>
        
        <Footer text="FULLFILIX © 2022 - All rights reserved"/>
    </div>
  );
}

export default Details;
