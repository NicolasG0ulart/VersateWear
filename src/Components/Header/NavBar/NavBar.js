import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo.png"

import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {

const NavBar = styled.nav`

  h1 {
    font-size: 2.7rem;
  }
    padding-inline: 150px;

  @media (max-width: 1440px) {
    padding-inline: 100px;
  }
  @media (max-width: 1024px) {
    padding-inline: 30px;
  }
    @media(max-width: 768px){
        display: flex;
        justify-content: center;
      }
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #fc4b08 solid;
    
    img {
      height: 25px;
    }

    ul {
      display: flex;
      gap: 60px;
      list-style: none;
      font-size: 1.5rem;

      li {
        position: relative;
        display: flex;
        align-items: center;
        gap: 5px;

        &:hover {
          color: #fc4b08;
          cursor: pointer;
        }
  }
`
const SFaWhatsapp = styled(FaWhatsapp)`
  color: #fff;
  &:hover{
    cursor: pointer;
    color: #fc4b08;
  }
  @media(max-width: 768px){
    display: none;
  }
`;

  return (
    <>
        <NavBar>
          <img src={Logo} alt="logo do site"/>
          <SFaWhatsapp size={35} />
        </NavBar>
    </>
  );
}
