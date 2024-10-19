import styled, { keyframes } from "styled-components";
import Banner from "../../assets/bg-banner.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Header = styled.header`
  margin-top: -85px;
  background-image: url(${Banner});
  height: 100vh;
  padding-inline: 150px;

  @media (max-width: 1440px) {
    padding-inline: 100px;
  }

  @media (max-width: 1024px) {
    padding-inline: 30px;
  }
`;
export const Title = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    animation: ${fadeIn} 0.5s ease-in-out;
    font-size: 4rem;
    color: #fff;
    @media(max-width: 768px){
        font-size: 2.7rem;
    }
  }

  p {
    margin-top: 30px;
    font-size: 1.5rem;
    @media(max-width: 768px){
        font-size: 1.3rem;
    }
  }

  button {
    padding-right: 40px;
    position: relative;
    margin-top: 30px;
    height: 60px;
    width: 170px;
    border-style: none;
    border-radius: 3px;
    background-color: #fc4b08;
    transition: 0.4s;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

    span {
      transition: 0.4s;
      position: absolute;
      right: 20px;
      top: 19px;
    }

    &:hover span {
      color: #000c3a;
      right: 10px;
    }

    &:hover {
      cursor: pointer;
      background-color: #f24200;
      color:
`