import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import DiscordLogo from '../images/logo.svg'
import Button from './Button'

const HaederStyle = styled.header`
  z-index: 12;
  position: relative;
  padding: 23px 320px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  text-align: center;

  ul li {
    display: inline-block;
    padding: 8px 20px;
    font-weight: 600;
    font-size: 14px;
  }

  ul li:hover{
    text-decoration: underline;
    cursor: pointer;
  }

  button{
    margin-left: 90px;
    color: #23272a;
  }
`

const Header = () => {
  return (
    <HaederStyle>
      <Link to="/">
        <img src={DiscordLogo} alt="Discord" title="Discord"/>
      </Link>

      <ul>
        <li>Baixar</li>
        <li>Por quê usar o Discord?</li>
        <li>Nitro</li>
        <li>Segurança</li>
        <li>Suporte</li>
      </ul>

      <Button small>Entrar</Button>
    </HaederStyle>
  );
}

export default Header