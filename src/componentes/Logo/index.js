import logo from "../../imagens/logo.svg"
import styled from "styled-components"

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImg = styled.img`
  margin-right: 20px;
`


function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt='logo'></LogoImg>
      <p>
        <strong>Alemao</strong>Books
      </p>
    </LogoContainer>
  )
}

export default Logo
