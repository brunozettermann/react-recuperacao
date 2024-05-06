import './App.css'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Biblioteca from './components/Biblioteca.jsx'
import Livro from './components/Livro.jsx'

function App() {
  return(
    <>
    <Cabecalho />
    <Biblioteca />
    <Livro
    titulo={"The Walking Dead: Invasão"}
    autor={" Autores: Robert Kirkman e Jay Bonansinga"}
    ano={"Ano: 14 de outubro de 2015"}
    sinopse={"Sinopse: Das ruínas da problemática Woodbury, surgem dois grupos rivais; cada um com seus interesses. De um lado, no subterrâneo, Lilly lidera um grupo de desajeitados, idosos e crianças, com a intenção de recomeçar e construir uma nova vida. No entanto, Lilly Caul ainda mantém seu desejo de recuperar sua cidade. "}
    sinopse2={"Uma batalha entre dois antagonistas que promete ser sanguinária, pois uma arma diabólica, forjada a partir de uma insana horda de mortos vivos, deve roubar a cena."}
    />
    <h3>Livros Disponíveis</h3>
    <Galeria />
    <Rodape />
    </>
  )
}

export default App