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
  background-image: url(${Banner});
  height: 100vh;
  padding-inline: 150px;

  h1 {
    font-size: 2.7rem;
  }
  
  nav {
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #fc4b08 solid;
    img{
      height: 25px;
    }
    ul {
      display: flex;
      gap: 60px;
      list-style: none;
      font-size: 1.5rem;
      
      li {
        &:hover {
          color: #fc4b08;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Title = styled.section`
  margin-top: 300px;

    h1 {
        animation: ${fadeIn} 0.5s ease-in-out;
        font-size: 4rem;
        color: #fff;
    }
    p{
        margin-top: 30px;
        font-size: 1.5rem;
    }
    button{
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

        span{
          transition: 0.4s;
          position: absolute;
          right: 20px;
          top: 19px;
        }

        &:hover span{
          color: #000c3a;
          right: 10px;
        }
        &:hover {
          cursor: pointer;
          background-color: #f24200;
          color: #000c3a;
        }
    }
`;
