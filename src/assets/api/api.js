import axios from "axios"


export const pickMovies = (setState) => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=39600c8af0462aa8d9aa27925348b959&language=pt-BR&page=1")
    .then((response)=>{
        setState(response.data.results) //Pega apenas os resultados importantes
}).catch((erro) => {
    console.log("API Error")
})
}

//Com a assistência do DevToolsReact p/ o chrome
//https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi