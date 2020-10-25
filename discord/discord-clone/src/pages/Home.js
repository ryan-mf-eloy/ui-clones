import React from 'react'
import styled from 'styled-components'

import { H1, H2, H4 } from '../components/Title'
import Button from '../components/Button'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { BsDownload } from 'react-icons/bs'

import BannerIllustration from '../images/illustration.svg'
import SectionSVGEffect from '../images/section-effect.svg'
import FirstIllustration from '../images/1.svg'
import SecondIllustration from '../images/2.svg'
import ThirdIllustration from '../images/3.svg'
import FourthIllustration from '../images/4.svg'
import StarsIllustration from '../images/stars.svg'

const Banner = styled.section`
  text-align: center;
  color: #ffffff;
  background: linear-gradient(0deg,#7196ff -.45%,#2a5ee8 71.18%);
  position: relative;
  overflow: hidden;

  div.illustration-background {
    background-image: url(${BannerIllustration});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    transform: scale(1.13);
  }

  div.introduction {
    z-index: 12;
    position: relative;
    padding: 120px 40px;
    margin: 0 auto;
    max-width: 800px;
  }

  div.introduction p{
    padding: 50px 0 30px 0;
  }

  div.introduction button{
    margin: 0 10px;
  }

  div.introduction div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

const Main = styled.main`
  text-align: center;

  section div,
  img{
    display: inline-block;
  }

  section {
    padding: 100px 0;
    position: relative;
  }

  section div.text {
    max-width: 500px;
    padding: 20px 40px;
    text-align: left;
    margin: 20px
  }

  section div.text h2{
    padding: 20px 0;
  }

  section.secondary-section {
    background: #efefef;
    margin: 90px 0;
  }
  
  section.secondary-section img.effect,
  section.fourth-section{
    position: absolute;
    left: 0;
    right: 0;
  }

  section.secondary-section img.effect.top,
  section.fourth-section img.effect.top{
    top: -5rem;
  }

  section.secondary-section img.effect.bottom{
    bottom: -8rem;
    transform: rotate(180deg);
  }

  section.secondary-section div.text {
    position: relative;
    top: -120px
  }

  section.fourth-section {
    background: #efefef;
    position: relative;
    padding: 0 0 120px 0;
    margin-top: 120px;
  }

  section.fourth-section img.effect.top {
    transform: translateY(-100%);
  }

  section.fourth-section p {
    max-width: 850px;
    padding: 20px 0;
    margin: 0 auto;
  }

  section.fourth-section img:not(.effect) {
    width: 65%
  }

  div.before-footer-cta {
    display: block;
    background-image: url(${StarsIllustration});
    background-size: 560px;
    background-position: top;
    background-repeat: no-repeat;
    margin-top: 100px;
  }

  div.before-footer-cta button{
    margin: 0 auto;
  }

  div.before-footer-cta h4{
    padding: 40px 0;
  }
` 

const Home = () => {
  return(
    <>
        <Banner>
          <Header />

          <div className="illustration-background"></div>
            <div className="introduction">
              <H1 fontWeight="900">Seu lugar para conversar</H1>
              <p>Não importa se você faz parte de um clube escolar, uma comunidade artística mundial ou só amigos querendo ficar de boa, o Discord torna mais fácil conversar todo dia e se ver com mais frequência.</p>

              <div>
                <Button><BsDownload size="20" /> Baixar para Linux</Button>
                <Button dark>Abra o Discord no seu navegador</Button>
              </div>
          </div>
        </Banner>

        <Main>
          <section>
            <img src={FirstIllustration} />
            <div className="text">
              <H2 fontWeight="900">Ambientes controlados por convites, com muito espaço pra conversar</H2>
              <p>Os servidores Discord são organizados em canais com tópicos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.</p>
            </div>
          </section>

          <section className="secondary-section">
            <img src={SectionSVGEffect} className="effect top"/>
            <img src={SectionSVGEffect} className="effect bottom"/>

            <div className="text">
              <H2 fontWeight="900">Aqui é fácil se encontrar</H2>
              <p>Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.</p>
            </div>

            <img src={SecondIllustration} />
          </section>

          <section>
            <img src={ThirdIllustration} />
            <div className="text">
              <H2 fontWeight="900">Para poucos e para muitos</H2>
              <p>Organize uma comunidade de qualquer tamanho com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais.</p>
            </div>
          </section>


          <section className="fourth-section">
            <img src={SectionSVGEffect} className="effect top"/>

            <H2 fontWeight="900">Tecnologia de conexão confiável</H2>
            <p>Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera pra desenhar na tela compartilhada.</p>

            <img src={FourthIllustration} />

            <div className="before-footer-cta">
              <H4 fontWeight="900">Vamos começar sua jornada?</H4>
              <Button primary><BsDownload size="20" /> Baixar para Linux</Button>
            </div>
          </section>
          <Footer />
      </Main>
    </>
  );
}

export default Home;