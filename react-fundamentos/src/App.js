import React from "react";
import Post from "./Post";

const meuNome = 'Gabriel Vitor Siqueira'

function App(){
    return (
        <>
            <h1> Teste do nome </h1>
            <h2> Olá, meu nome é {meuNome}, e estou aprendendo a desenvolver em ambientes web. </h2>
            <hr/>
            <Post
            post={{
                title:"Titulo da noticia 1",
                subtitle:"Subtitulo noticia 1"
            }}
            />
            <Post
            post={{
                title:"Titulo teste 2",
                subtitle:"Subtitulo 2"
            }}
            />
            <Post
            post={{
                title:"Titulo de teste 3",
                subtitle:"Subtitulo noticia 3"
            }}
            />
        </>
    );
}

export default App;