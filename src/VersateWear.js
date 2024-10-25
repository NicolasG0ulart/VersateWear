import React from "react"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BGImg from "../src/assets/background.png"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
body{
  background-image: url(${BGImg});
  h1, h2, h3, h4, h5, p, button, li, label{
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
  }
}

}
`

export default function VersateWear() {
  return (
    <> 
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>página não encontrada</div>} />  
        </Routes>
      </Router>
    </>
  );
};