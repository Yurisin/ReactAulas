import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 15px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 50px;
    cursor: pointer;
    background:rgb(3, 75, 129);
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa () {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Digite o nome do livro"
        onBlur={evento => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())); 
          setLivrosPesquisados(resultadoPesquisa);


        }}
      />
      { livrosPesquisados.map(livro => (
        <Resultado>
          <img src={livro.src}/>  
          <p>{livro.nome}</p>
        </Resultado>
      ) ) }
      
    </PesquisaContainer>
  )
} 

export default Pesquisa;