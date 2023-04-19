import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/MovieDetails/MovieDetails";
import React from "react";
import Error404 from "../../Pages/Error404/Error404";
export function RouterDOM(){
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/details/:movieid" element={<Details/>}/>
        <Route path="*" element={<Error404/>}/>

    </Routes>
    </BrowserRouter>
    )
}