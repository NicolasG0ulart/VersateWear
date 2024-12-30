import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { useCart } from '../../../Pages/Cart/ContextCart'; 

const NavBarContainer = styled.nav`
  padding-inline: 150px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #fc4b08 solid;
  background-color: ${(props) => props.bgColor || "transparent"};
  div {
    position: relative;
    h4 {
      color: rgb(255, 255, 255);
      position: absolute;
      right: -15px;
      top: -5px;
    }
  }

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
const LinkStyled = styled(Link)`
  color: #fc4b08;
  text-decoration: none;
`;
const IconStyled = styled(IoBagHandleOutline)`
  color: #fff;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    color: #fc4b08;
  }
`;

export default function NavBar({ bgColor }) {
  const { cart } = useCart(); // Utilize o contexto do carrinho

  return (
    <NavBarContainer bgColor={bgColor}>
      <LinkStyled to="/">
        <img src={Logo} alt="logo do site" />
      </LinkStyled>
      <div>
        <a
          href="https://instagram.com/versatewear"
          target="_blank"
          rel="noreferrer"
        >
          <SFaInstagram size={35} />
        </a>
        <LinkStyled to="/cart">
          <IconStyled size={38} />
          <h4>{cart.length}</h4> {/* Exibe a quantidade de itens no carrinho */}
        </LinkStyled>
      </div>
    </NavBarContainer>
  );
}
