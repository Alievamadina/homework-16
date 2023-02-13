import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const productive = [
  {
    title: "Product 1",
    id: "1",
  },
  {
    title: "Product 2",
    id: "2",
  },
];

const Products = ({ onVisable }) => {
  return  (
    <div>
    <StyledUl>
      {productive.map((item) => (
        <StyledLi key={item.id}>
          {item.title}
          <StyledLink onClick={onVisable} to={`${item.id}`}>
            details
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  </div>
  )
};

export default Products;

const StyledUl = styled.ul`
  display: grid;
  justify-content: center;
  gap: 25px;
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
  padding: 15px 0;
  width: 800px;
`;

const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  background-color: #0dc2b9;
  border-radius: 20px;

  :hover {
    background-color: #0caea6;
  }
`;