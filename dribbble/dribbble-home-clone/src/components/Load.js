import React from 'react';
import styled from 'styled-components';

import LoadingGif from '../images/loading.gif';

const LoadStyle = styled.div`
  padding: 40px 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

  img {
    max-width: 30px;
  }
`;

const Load = () => {
  return(
    <LoadStyle>
        <img src={LoadingGif} /> <strong>Loading more...</strong>
    </LoadStyle>
  );
};

export default Load;