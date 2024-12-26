import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";

const NavBarContainer = styled.nav`
  padding-inline: 150px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #fc4b08 solid;
  background-color: ${(props) => props.bgColor || "transparent"};

  @media (max-width: 1440px) {
    padding-inline: 100px;
  }
  @media (max-width: 1024px) {
    padding-inline: 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  img {
    height: 25px;
  }
`;

const SFaInstagram = styled(FaInstagram)`
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #fc4b08;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function NavBar({ bgColor }) {
  return (
    <NavBarContainer bgColor={bgColor}>
      <img src={Logo} alt="logo do site" />
      <a
        href="https://instagram.com/versatewear"
        target="_blank"
        rel="noreferrer"
      >
        <SFaInstagram size={35} />
      </a>
    </NavBarContainer>
  );
}
