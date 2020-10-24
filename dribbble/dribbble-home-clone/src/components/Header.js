import React from 'react';
import styled from 'styled-components';

import { handleDropdownShow, handleDropdownHide } from '../home/events/HandleDropdown';

import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

import Briefcase from '../images/briefcase.svg';
import Times from '../images/times.svg';
import Logo from '../images/logo.svg';

import Button from './Button';

import {
  DropdownExplore,
  DropdownForDesigners,
  DropdownHiringDesigners
} from '../home/DropdownsContent';


const Nav = styled.nav`
  padding: 18px 30px;
  border-bottom: 1px solid #eeeeee;
  display: grid;
  grid-template-columns: 90px 12fr 6fr;
  align-items: center;
  position: relative;
  z-index: 12;

  a.logo {
    transform: scale(0.83);
  }

  a.logo:hover {
    opacity: .6;
  }

  input {
    padding: 10px 15px 12px 40px;
    background: #f2f2f2;
    color: #333333;
    border: 1px solid #f2f2f2;
    max-width: 170px;
    border-radius: 8px;

    :hover {
      box-shadow: 0 0 0 5px rgba(234, 76, 137, .1);
      background: transparent;
    }

    :focus {
      box-shadow: 0 0 0 5px rgba(234, 76, 137, .13);
      border-color: #f082ac;
      background: transparent;
    }
  }

  div.input-group {
    display: inline-block;
    margin: 0 20px 0 10px;
    align-items: center;
  }

  ul li {
    display: inline-block;
    padding: 5px 15px;
    align-items: center;
    text-decoration: none;
    color: #6e6d7a;
    font-weight: 600;
  }

  ul li:hover{
    color: #333333;
  }

  ul li svg{
    float: right;
    margin: 2px 0 0 5px;
  }

  ul li:last-child{
    border-left: 1px solid #dddddd;
  }

  div.avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #eeeeee;
    position: relative;
    bottom: -15px;
  }

  div.avatar, button {
    display: inline-flex;
    margin: 0 10px;
  }

  div img.briefcase{
    max-width: 18px;
    position: relative;
    bottom: -5px;
  }

  div img.times{
    max-width: 17px;
    background: #6e6e6e;
    border-radius: 50%;
    padding: 2px;
    border: 2px solid #ffffff;
    position: relative;
    left: -7px;
    bottom: -10px;
  }

  strong span{
    font-weight: 600;
  }

  div.right-side{
    margin-top: -12px;
  }
`;

const Header = () => {
  return (
    <>
    <header>
      <Nav>
        <a href="/" className="logo">
          <img src={Logo}/>
        </a>

        <ul>
          <li onMouseOver={handleDropdownShow} onMouseOut={handleDropdownHide} data-js=".dropdown-explore">
            Explore <IoIosArrowDown />
          </li>
          
          <li onMouseOver={handleDropdownShow} onMouseLeave={handleDropdownHide} data-js=".dropdown-for-designers">
            For Designers <IoIosArrowDown />
          </li>
          
          <li onMouseOver={handleDropdownShow} onMouseLeave={handleDropdownHide} data-js=".dropdown-hiring-designers">
            Hiring Designers?
          </li>
        </ul>

      
        <div className="right-side">
          <strong>
            <span className="text-orange">Upgrade Now</span>
            <span className="text-pink"> — Go Pro</span>
          </strong>

          <div className="input-group">
            <FiSearch size="20" />
            <input type="search" placeholder="Search" />
          </div>

          <img src={Briefcase} className="briefcase"/>
          <img src={Times}  className="times"/>

          <div className="avatar"></div>

          <Button primary>Upload</Button>
        </div>
      </Nav>
    </header>

    <DropdownExplore />
    <DropdownForDesigners />
    <DropdownHiringDesigners /> 
    </>
  );
}

export default Header;