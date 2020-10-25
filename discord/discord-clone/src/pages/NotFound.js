import React from 'react'
import styled from 'styled-components'

import { H1, H4 } from '../components/Title'

import { AiOutlineArrowRight } from 'react-icons/ai'

import DiscordGrayLogo from '../images/gray-logo.svg'

const NotFoundStyles = styled.div`
  padding: 200px;
  
  div.message {
    max-width: 540px;
    padding: 30px;
  }

  div.message h4 {
    padding: 10px 0;
  }

  div.message p {
    color: #b9bbbe;
    opacity: .7;
    font-weight: 300;
  }

  ul {
    padding-top: 25px
  }

  ul li{
    text-transform: uppercase;
    padding: 8px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    opacity: 0.5;
    display: flex;
    align-items: center;
    position: relative;
    left: -1.8rem
  }

  ul li svg {
    opacity: 0;
    margin-right: 10px;
  }
  
  ul li:hover{
    opacity: 1;
  }

  ul li:hover svg {
    opacity: 1;
  }

  img.logo {
    display: block;
    padding: 10px 0;
    margin: 0 auto;
    width: 200px;
  }

  h1 {
    font-size: 150px;
    padding: 50px 0
  }
`

const NotFound = () => {
  return (
    <>
      <NotFoundStyles>
        <div className="message">
          <H1 fontWeight="900" color={({ theme }) => theme.primary}>404</H1>
          <H4 fontWeight="900" color="#72767d">MAGOS ATRÁS DE CORTINAS?</H4>
          <p>Que coisa mais 1939. Na verdade, o Discord funciona com hamsters robôs quânticos. As maravilhas da tecnologia, né? Enfim, parece que você virou errado em algum lugar. Toma aqui algumas sugestões de páginas.</p>

          <ul>
            <li><AiOutlineArrowRight size="20" color={({ theme }) => theme.primary}/> Página de estado</li>
            <li><AiOutlineArrowRight size="20" color={({ theme }) => theme.primary}/> @Discord</li>
            <li><AiOutlineArrowRight size="20" color={({ theme }) => theme.primary}/> Suporte</li>
          </ul>
        </div>

        <img src={DiscordGrayLogo} className="logo" />
      </NotFoundStyles>
    </>
  )
}

export default NotFound