import React from 'react';
import styled from 'styled-components';

const DropdownStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: 200px;
  column-gap: 50px;
  padding: 30px 30px;
  background: #ffffff;
  box-shadow: 0 20px 20px 4px rgba(0,0,0, .1);
  position: absolute;
  right: 0;
  left: 0;
  top: 80px;
  display: none;
  z-index: 8;

  div{
    background: #eeeeee;
    border-radius: 8px;
  }
`;

const DropdownExploreStyles = styled(DropdownStyles)``;
const DropdownForDesignersStyles = styled(DropdownStyles)``;
const DropdownHiringDesignersStyles = styled(DropdownStyles)``;

const DropdownExplore = () => {
  return (
    <DropdownExploreStyles className="dropdown-explore">
      <div style={{background: '#d9776f'}}></div>
      <div style={{background: '#d9776f'}}></div>
      <div style={{background: '#d9776f'}}></div>
    </DropdownExploreStyles>
  );
};

const DropdownForDesigners = () => {
  return (
    <DropdownForDesignersStyles className="dropdown-for-designers">
      <div style={{background: '#ea4c89'}}></div>
      <div style={{background: '#ea4c89'}}></div>
      <div style={{background: '#ea4c89'}}></div>
    </DropdownForDesignersStyles>
  );
};

const DropdownHiringDesigners = () => {
  return (
    <DropdownHiringDesignersStyles className="dropdown-hiring-designers">
      <div style={{background: '#0d0c22'}}></div>
      <div style={{background: '#0d0c22'}}></div>
      <div style={{background: '#0d0c22'}}></div>
    </DropdownHiringDesignersStyles>
  );
};

export { DropdownExplore, DropdownForDesigners, DropdownHiringDesigners };