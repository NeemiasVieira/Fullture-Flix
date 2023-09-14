import { useEffect, useState } from "react";
import { pickMovies } from "../../assets/api/api";
import React  from 'react';
import { Container } from "./CardsStyle";
import { Catalogue } from "../../Pages/Home/HomeStyle";


export function Cards(){

     const [movies, setMovies] = useState();

    useEffect(()=>{
        pickMovies(setMovies)
    },[])

    //Para cada um do array é exibido no DOM o nome do filme, conforme puxado da API e,
    //especificado abaixo na rederenização "movie.title"
    return(
        <Catalogue>{!movies ? "Loading" : <>
        {movies.map((movie)=>{
            
           return(
            <Container key={movie.id} id={movie.id} to={`/details/${movie.id}`}>
                <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} />
                <h4>{movie.title}</h4>
                {/* <h4>Score:  {movie.vote_average}</h4> */}
            </Container>
           );

        })}
        </>

        }
         
         </Catalogue>
    
    )

}