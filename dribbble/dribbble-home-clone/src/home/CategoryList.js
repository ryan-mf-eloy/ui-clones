import styled from 'styled-components';

const CategoryList = styled.ul`
  padding: 0 10px;
  align-items: center;

  li {
    display: inline-block;
    padding: 10px 12px;
    margin: 0 5px;
    border-radius: 8px;
    color: #6e6d7a;
  }

  li:hover{
    color: #333333;
    cursor: pointer;
  }

  li.active{
    background: #eeeeee;
    color: #333333;
    font-weight: 600;
  }

  button:first-child{
    float: left;
  }
  button:last-child{
    float: right;
  }
`;

export default CategoryList;