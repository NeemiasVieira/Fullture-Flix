import { useEffect, useState } from "react";
import { pickMovies } from "../../assets/api/api";
import React, { Component }  from 'react';
import { Container } from "./CardsStyle";
import { Catalogue } from "../../Pages/Home/HomeStyle";
import {Link} from "react-router-dom"

export function Cards(){

     const [movies, setMovies] = useState();

    useEffect(()=>{
        pickMovies(setMovies)
    },[])

    //Para cada um do array é exibido no DOM o nome do filme, conforme puxado da API e,
    //especificado abaixo na rederenização "movie.title"
    return(
        <Catalogue to="/details">{!movies ? "Loading" : <>
        {movies.map((movie)=>{
            
           return(<Container key={movie.id}>
             <img 
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={movie.title} />
            <h4>{movie.title}</h4>
            <h4>Note: {movie.vote_average}</h4>
           </Container>
           );

        })}
        </>

        }
         
         </Catalogue>
    
    )

}