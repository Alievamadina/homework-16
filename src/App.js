import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Card from "./pages/Card";
import Home from "./pages/Home";
import Order from "./pages/Order";
import ProductPage from "./pages/ProductPage";
function App() {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);

  const onVisible = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductPage isVisible={isVisible} onVisible={onVisible} />}
        >
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="/card" element={<Card />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <StyledButton onClick={() => navigate(-1) || setVisible(false)}>
        Go back
      </StyledButton>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #ece6f1;
    }

  `;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #0dc2b9;
  border-radius: 20px;

  :hover {
    background-color: #0caea6;
  }
`;
