import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 500;
  color: ${props => props.color ? props.color : `#6e6d7a`};
  background: transparent;
  align-items: center;
  border: 1px solid #eeeeee;
  cursor: pointer;

  :hover{
    border: 1px solid #dddddd;
  }

  svg.left {
    float: left;
    margin-top: -2px;
    margin-right: 5px;
  }

  svg.right{
    float: right;
    margin-top: 2px;
    margin-left: 5px;
  }

  ${props => props.primary &&
    `
     background: #ea4c89;
     border-color: #ea4c89;
     color: #ffffff;
     :hover{ background: #f082ac; border-color: #f082ac; }
  `}
`;

export default Button;