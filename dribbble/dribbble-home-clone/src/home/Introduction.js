import React from 'react';
import styled from 'styled-components';

import { BiFilter } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

import Button from '../components/Button';
import { H2 } from '../components/Titles';

import CategoryList from './CategoryList';

import useHandleCategory from './events/HandleCategory';

const IntroductionStyles = styled.div`
  h2 {
    padding: 10px 0;
  }

  div.title {
    padding: 30px 0 50px 0;
  }
`

const Introduction = () => {
  return (
    <>
      <IntroductionStyles>
        <CategoryList className="category-list">
        <Button>Following <IoIosArrowDown className="right" /></Button>
          <li onClick={useHandleCategory} className="active">All</li>
          <li onClick={useHandleCategory}>Animation</li>
          <li onClick={useHandleCategory}>Branding</li>
          <li onClick={useHandleCategory}>Illustration</li>
          <li onClick={useHandleCategory}>Mobile</li>
          <li onClick={useHandleCategory}>Print</li>
          <li onClick={useHandleCategory}>Product Design</li>
          <li onClick={useHandleCategory}>Typrography</li>
          <li onClick={useHandleCategory}>Web Design</li>
        <Button color="#000000"><BiFilter className="left" size="20" /> Filters</Button>
      </CategoryList>
      
        <div className="title">
          <H2 fontWeight="700">You aren’t following anyone yet</H2>
          <p><span className="text-pink">Find friends</span> you already know from Twitter.</p>
        </div>
      </IntroductionStyles>
    </>
  );
}

export default Introduction;