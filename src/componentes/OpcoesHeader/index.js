import styled from 'styled-components'
import {Link} from 'react-router-dom'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul`
  display: flex;
`

function OpcoesHeader() {
    return(
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.replace(/\s+/g, '-').toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}


export default OpcoesHeader;