import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    transition: all .2s ease;
  }

  button,
  input,
  * {
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 300;
  }

  body,
  html{
    background: ${({ theme }) => theme.webBackgorund}
  }

  p{
    line-height: 32px;
    font-size: 18px;
  }

  ul{
    list-style: none;
  }
`

export default GlobalStyles