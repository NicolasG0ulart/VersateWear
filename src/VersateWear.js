import React from "react"
import Home from "./Pages/Home/Home"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{

  h1, h2, h3, h4, h5, p, button, li{
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
      <GlobalStyle/>
      <Home/>
    </>
  )
}