import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-family: 'Roboto', 'sans-serif';
    outline: none;
    font-size: 15px;
    color: #333333;
  }

  img {
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  .input-group {
    position: relative;
    display: inline-block;
    margin: 0 20px 0 10px;
    align-items: center;
  }

  .input-group svg {
    position: absolute;
    left: .7rem;
    top: .7rem;
  }

  .text-pink{
    color: #ea4c89;
  }

  .text-orange{
    color: #d9776f;
  }

  .container{
    margin: 30px 70px;
    text-align: center;
  }

  strong {
    font-weight: 500;
  }
`;

export default GlobalStyles;