import React from 'react';
import styled from 'styled-components';

import { H6 } from '../components/Titles';

const ShotsStyles = styled.div`
  height: 300px;
  border-radius: 8px;
  background: #eeeeee;
  position: relative;
  margin-top: 30px;

  div.details{
    position:absolute;
    bottom: -2.3rem;
    left: 5px;
  }

  div.details h6{
    display: inline-block;
    color: #0d0c22;
    margin-right: 10px;
  }

  div.details small{
    padding: 1px 3px;
    border-radius:3px;
    background: #cccccc;
    color: #ffffff;
    font-weight: 600;
    font-size: 11px;
    text-transform: uppercase;
  }

  div.details div.avatar{
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    display: inline-block;
    background: #aaaaaa;
    position: relative;
    bottom: -7px;
  }
`;

const Shots = () => {
  return (
    <ShotsStyles>
      <div className="details">
        <div className="avatar"></div>
        <H6 fontWeight="500">Shot art name</H6>
        <small>Team</small>
      </div>
    </ShotsStyles>
  );
};

export default Shots;