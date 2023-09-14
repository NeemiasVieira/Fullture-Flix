import { Footer } from "../../Cards/Footer/Footer";
import {Link} from 'react-router-dom'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Detalhes, MovieDetails, Data } from "./MovieDetailsStyle";
import { FooterDetails } from "../../Cards/Footer/FooterStyle";
import { pickMovieDetails } from "../../assets/api/api";
import { getMovieDetails } from "../../assets/redux/slice";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Details() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.page.value2)
  const [details, setDetails] = useState();
  const {movieid} = useParams();
  

  useEffect(() => {
    pickMovieDetails(movieid, setDetails)
  },[])

  useEffect(() => {    
    dispatch(getMovieDetails(details))
  }, [details])

  const title = state ? state.title : "Desconhecido";
  const overview = state ? state.overview: "Desconhecido";
  const release_date = state ? state.release_date: "Desconhecido"; //Garante que só seja rederizado após o state.page.value2 ter o valor correto
  const vote_average = state ? state.vote_average: "Desconhecido";
  const poster_path = state ? state.poster_path: "Desconhecido"; 



  return (
    <MovieDetails>
      <Detalhes>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <Data>
          <div>
          <p><b>Title: </b>{title}</p>
          <p><b>Overview: </b>{overview}</p>
          <p><b>Release Date: </b>{release_date}</p>
          <p><b>Score: </b>{vote_average}</p>
          </div>
          <div>
          <button onClick={() => navigate(-1)}>Back to home</button>
          </div>
        </Data>          
      </Detalhes>
      <FooterDetails>
      <Footer text="FULLFLIX © 2023 - All rights reserved"/>
      </FooterDetails>
      </MovieDetails>

  );
}

export default Details;
