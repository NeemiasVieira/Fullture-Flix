(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(n,e,t){n.exports=t.p+"static/media/fullflix.d119368b.jpeg"},31:function(n,e,t){n.exports=t.p+"static/media/error401.e9a4dd50.png"},32:function(n,e,t){n.exports=t(67)},40:function(n,e,t){},66:function(n,e){},67:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(25),o=t.n(i),l=(t(40),t(6)),c=t(1);function m(n){var e=n.text;return r.a.createElement("footer",null,e)}var h,u,d,s,g,p=t(7),v=t(26),f=t.n(v),x=function(n){f.a.get("https://api.themoviedb.org/3/movie/popular?api_key=39600c8af0462aa8d9aa27925348b959&language=pt-BR&page=1").then(function(e){n(e.data.results)}).catch(function(n){console.log("API Error")})},b=t(4),w=t(5),E=w.a.div(h||(h=Object(b.a)(["\n    color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid whitesmoke;\n    margin: 1vh 1vw;\n    text-align: center;\n    align-items: center;\n    min-height: 55vh;\n    color: whitesmoke;\n    max-height: 45vh;\n    overflow: hidden;\n\n    :hover{\n        border: 1px solid #e50914;\n        cursor: pointer;\n    }\n\n    h4{\n        margin: 1vh 0;\n        color: whitesmoke;\n    }\n    img{\n        max-height: 45vh;\n    }\n\n\n    @media (max-width: 480px){\n        width: 65vw;\n        margin: 0 17.5vw 2vh 17.5vw;\n    }\n\n\n"]))),k=t(30),j=t.n(k),y=w.a.div(u||(u=Object(b.a)(["\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    display: flex;\n    height: 100vh;\n    color: whitesmoke;\n\n    @media (max-width: 480px){\n        height: 40vh;\n    }\n    \n    \n    "])),j.a),O=Object(w.a)(l.b)(d||(d=Object(b.a)(["\n\n\n\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    height: fit-content;\n    min-height: 90vh;\n    gap: 1vw;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\n    h2{\n        margin: 0;\n        display: flex;\n        position: relative;\n        left: 50px;\n        max-width: 50vw;\n    }\n\n\n\n    "]))),F=w.a.div(s||(s=Object(b.a)(["\n    \n    h2{\n        color: whitesmoke;\n        margin: 0 0 7vh 3vw;\n        font-weight: 900;\n        display: flex;\n        position: relative;\n        min-width: 100%;\n    }\n\n    @media (max-width: 480px){\n        h2{\n            font-size: 1.2em;\n            justify-content: center;\n            margin: 0 0 7vh 0;\n        }\n    }\n    "]))),L=w.a.div(g||(g=Object(b.a)(["\n    background-color: rgb(10, 10, 10);\n    max-width: 100vw;\n"])));function I(){var n=Object(a.useState)(),e=Object(p.a)(n,2),t=e[0],i=e[1];return Object(a.useEffect)(function(){x(i)},[]),r.a.createElement(O,{to:"/details"},t?r.a.createElement(r.a.Fragment,null,t.map(function(n){return r.a.createElement(E,{key:n.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title}),r.a.createElement("h4",null,n.title),r.a.createElement("h4",null,"Score:  ",n.vote_average))})):"Loading")}var z,A=function(n){var e=n.text;return r.a.createElement("header",null,r.a.createElement("h2",null,e))},B=w.a.div(z||(z=Object(b.a)(["\n    \nbackground-color: #000;\ncolor: gray;\nfont-family: sans-serif;\nfont-weight: 600;\nheight: 30px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nborder-top: 1px solid gray;\npadding: 20px 0;\nfont-size: 2.8vh;\nmargin: 7vh 0 0 0;\n\n\n@media (max-width: 480px){\n    font-size: 1.2em;\n}\n\n"])));var S=function(){return Object(a.useEffect)(function(){},[]),r.a.createElement(L,null,r.a.createElement(y,null),r.a.createElement(F,null,r.a.createElement(A,{text:"The most popular movies"})),r.a.createElement(I,null),r.a.createElement(B,null,r.a.createElement(m,{text:"FULLFILIX \xa9 2022 - All rights reserved"})))};t(66);var _,J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page in construction"),r.a.createElement(l.b,{to:"/"}," ",r.a.createElement("button",null,"Back to home")," "),r.a.createElement(m,{text:"FULLFILIX \xa9 2022 - All rights reserved"}))},P=t(31),R=t.n(P),U=Object(w.a)(l.b)(_||(_=Object(b.a)(["\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    img{\n        width: 50vw;\n        height: 50vh;\n        :hover{\n            border: 2px solid black;\n        }\n    }\n    button{\n        margin-top: 3vh;\n        border-radius: 15px;\n        background-color: #333;\n        color: whitesmoke;\n        height: 8vh;\n        width: 50vw;\n        font-size: large;\n        text-decoration: none;\n        cursor: pointer;\n        font-weight: 600;\n        \n        :hover{\n            background-color: black;\n            color: white;\n            cursor: pointer;\n            text-decoration: none;\n        }\n\n    }\n\n    @media (max-width: 480px){\n\n        margin-top: 15vh;\n        img{\n            height: 40vh;\n            width: 80vw;\n        }\n\n    }\n"])));var X=function(){return r.a.createElement(U,{to:"/"},r.a.createElement("img",{src:R.a}),r.a.createElement("button",null,"Go back to home"))};function G(){return r.a.createElement(l.a,{basename:"/Fullture-Flix"},r.a.createElement(c.c,null,r.a.createElement(c.a,{index:!0,element:r.a.createElement(S,null)}),r.a.createElement(c.a,{path:"/details",element:r.a.createElement(J,null)}),r.a.createElement(c.a,{path:"*",element:r.a.createElement(X,null)})))}var M=function(){return r.a.createElement("div",null,r.a.createElement(G,null))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)))}},[[32,1,2]]]);
//# sourceMappingURL=main.a44cc376.chunk.js.map