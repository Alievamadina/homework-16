import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Mainn>
      <Second>
        <Lishki to="/">LOGO</Lishki>
        <LiStyle>
          <Lishki to="/products">Products</Lishki>
          <Lishki to="/card">My Card</Lishki>
          <Lishki to="/order">My Orders</Lishki>
        </LiStyle>
      </Second>
    </Mainn>
  );
};

export default Header;
const Mainn = styled.div`
  background-color: #3ca8d3;
  width: 100%;
  padding: 20px;
`;
const Second = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
  align-items: center;
`;
const LiStyle = styled.ul`
  display: flex;
  width: 400px;
  justify-content: space-around;
`;
const Lishki = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  :hover {
    color: #2b74e2;
  }
  &.active {
    color: #222;
  }
`;
