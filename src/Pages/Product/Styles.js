import styled from "styled-components";

export const ProductMain = styled.main`
  h1, h2, h3, h4, p, button {
    font-family: "Inter", serif;
  }
`;

export const Content = styled.section`
  margin-top: 100px;
  padding-inline: 150px;
  display: flex;
  @media (max-width: 1440px) {
    padding-inline: 50px;
  }
  @media (max-width: 1024px) {
    padding-inline: 10px;
  }
`;

export const LeftSection = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  position: relative;

  img {
    border-radius: 5px;
    max-width: 100%;
    height: 600px;
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-inline: 30px;
  width: 100%;

  button {
    height: 50px;
    background-color: #01114c;
    color: #fc4b08;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fc4b08;
      color: #01114c;
    }
  }
`;

export const RightSection = styled.section`
  background-color: white;
  border-left: solid 2px #fc4b08;
  border-top: solid 2px #fc4b08;
  padding: 30px;
  padding-right: 50px;
  border-radius: 5px;
  width: 50%;

  h1 {
    margin-bottom: 20px;
    font-size: 2.3rem;
    font-weight: 500;
    color: #01114c;
  }

  h3 {
    margin-top: 5px;
    font-size: 1.3rem;
    font-weight: 400;
    color: #01114c;

    span {
      color: #fc4b08;
    }
  }

  button {
    margin-top: 30px;
    border: none;
    border-radius: 5px;
    background-color: #01114c;
    color: #fc4b08;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
