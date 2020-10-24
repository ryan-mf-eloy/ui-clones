import styled from 'styled-components';

const Main = styled.main`
  text-align: left;

  div.designs-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 40px;
    padding: 20px 0;
  }
`;

export default Main;