import { Footer } from "../../Cards/Footer/Footer";
import React from "react";
import { useEffect, useState} from "react";
import { Cards } from "../../Cards/Cards/Cards";
import { Header } from "../../Cards/Header/Header";
import { Headerdiv, HomeTitle, Father} from "./HomeStyle";
import { FooterHome } from "../../Cards/Footer/FooterStyle";
import { useNavigate } from "react-router-dom";

 function Home(){   

    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    //Guarda a posição do scroll para quando voltar na página
    useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.setItem('scrollY', window.scrollY);
        };
      
        window.addEventListener('beforeunload', handleBeforeUnload);
      
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);
      
      
      //Restaura a posição do Scroll
      useEffect(() => {
        const savedScrollY = localStorage.getItem('scrollY');
        if (savedScrollY !== null) {
          window.scrollTo(0, parseInt(savedScrollY, 10));
        }
      }, []);   
    
    useEffect(() => {       

    },[])

return(
    <Father>
        <Headerdiv></Headerdiv>
        <HomeTitle><Header text="The most popular movies"/></HomeTitle>
        <Cards/>
        <FooterHome>
        <Footer text="FULLFLIX © 2023 - All rights reserved"/>
        </FooterHome>
    </Father>
)

//"Text foi utilizado como parâmetro para passar as informações para o componente "

}

export default Home;