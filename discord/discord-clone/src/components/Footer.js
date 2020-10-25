import styled from 'styled-components'

import { H4 } from './Title'
import Button from './Button'

import { ImFacebook2, ImTwitter } from 'react-icons/im'
import { GrInstagram, GrYoutube } from 'react-icons/gr'

import DiscordLogo from '../images/logo.svg'
import BrazilFlag from '../images/brazil-flag.png'

const FooterStyle = styled.footer`
  background: ${({ theme }) => theme.darks[3]};
  width: 100%;
  color: #ffffff;
  padding: 40px 0;
  text-align: left;

  ul {
    padding: 10px 0 0 50px;
  }

  ul li {
    padding: 8px 0;
    font-size: 14px;
    cursor: pointer;
  }

  ul li:hover{
    text-decoration: underline;
  }

  ul span {
    color: ${({ theme }) => theme.primary}
  }

  div div h4 {
    padding-bottom: 20px;
  }

  div div span{
    display: flex;
    font-size: 12px;
    align-items: center;
    flex-direction: row;
  }

  div div svg{
    margin: 20px 30px 0 0;
    cursor: pointer;
  }

  div div img {
    max-width: 25px;
    margin-right: 10px;
  }

  div div div{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.container {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    margin: 0 320px;
    padding: 40px 0;
    display: grid;
    grid-template-columns: 350px 220px 220px 220px 220px;
  }

  div.footer{
    margin: 0 320px;
    padding: 30px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  div.footer button {
    margin: 0 0 0 auto;
    padding: 12px 18px;
    max-width: 160px;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div>
          <H4 fontWeight="900" color={({ theme }) => theme.primary}>Seu lugar para conversar</H4>
          <span><img src={BrazilFlag}/>Português do Brasil</span>
          <div>
            <ImTwitter size="22" color="#ffffff"/>
            <GrInstagram size="22" color="#ffffff"/>
            <ImFacebook2 size="20" color="#ffffff"/>
            <GrYoutube size="25" color="#ffffff"/>
          </div>
        </div>

        <ul>
          <span>Produto</span>
          <li>Baixar</li>
          <li>Por quê usar o Discord?</li>
          <li>Inspiração</li>
          <li>College</li>
          <li>Nitro</li>
          <li>Status</li>
        </ul>

        <ul>
          <span>Empresa</span>
          <li>Sobre</li>
          <li>Emprego</li>
          <li>Marca</li>
          <li>Sala de imprensa</li>
        </ul>

        <ul>
          <span>Recursos</span>
          <li>Suporte</li>
          <li>Segurança</li>
          <li>Blog</li>
          <li>Comentários</li>
          <li>Parceiros</li>
          <li>Verificação</li>
          <li>Desenvolvedores</li>
          <li>StremKit</li>
          <li>Código Aberto</li>
          <li>Segurança</li>
        </ul>

        <ul>
          <span>Política</span>
          <li>Termos</li>
          <li>Privacidade</li>
          <li>Diretrizes</li>
          <li>Reconhecimentos</li>
          <li>Licenças</li>
        </ul>
      </div>

      <div className="footer">
        <img src={DiscordLogo} />
        <Button primary small>Registrar</Button>
      </div>
    </FooterStyle>
  )
}

export default Footer