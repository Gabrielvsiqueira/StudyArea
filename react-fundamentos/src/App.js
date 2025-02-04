import React from "react";
import Post from "./Post";
import Header from "./Header";

function App(){
    return (
        <>
          <Header  title= "JStack's Blog">
          <h2>Teste</h2>
          </Header>

          <hr/>
            <Post
            likes={20}
            post={{
                title:"Titulo da noticia 1",
                subtitle:"Subtitulo noticia 1"
            }}
            />
            <Post
            likes={10}
            post={{
                title:"Titulo teste 2",
                subtitle:"Subtitulo 2"
            }}
            />
            <Post
            likes={50}
            post={{
                title:"Titulo de teste 3",
                subtitle:"Subtitulo noticia 3"
            }}
            />
        </>
    );
}

export default App;