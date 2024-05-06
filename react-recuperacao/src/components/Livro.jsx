
import React from 'react'
function Livro({titulo, autor, ano, sinopse, sinopse2}){
    return(
        <section className="Livro">
            <div className="Informacao"> 
            <h1>{titulo}</h1>
            <p>{autor}</p>
            <p>{ano}</p>
            <p>{sinopse}</p>
            <p>{sinopse2}</p>
            </div>
            <img src="livro6.jpg" alt="imagem" />
        </section>
    )
}
export default Livro