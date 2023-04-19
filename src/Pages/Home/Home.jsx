import { Footer } from "../../Cards/Footer/Footer";
import React from "react";
import { useEffect } from "react";
import { Cards } from "../../Cards/Cards/Cards";
import { Header } from "../../Cards/Header/Header";
import { Headerdiv, HomeTitle, Father} from "./HomeStyle";
import { FooterHome } from "../../Cards/Footer/FooterStyle";

 function Home(){   
    
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