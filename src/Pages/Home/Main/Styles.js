import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Destaque = styled.section`
    padding-inline: 150px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    @media(max-width: 1440px){
        padding-inline: 100px;
    }
    @media(max-width: 1024px){
      padding-inline: 30px;
    }
`
export const PesquisaMarca = styled.input`
    margin-top: 100px;
    padding-left: 15px;
    width: 400px;
    color: #f24200;
    height: 60px;
    border-radius: 3px;
    background-color: #01114c;
    font-family: "Lilita One", sans-serif;
    font-size: 1.5rem;
    border: none;

    &::placeholder {
        color: #f24200;
        opacity: 1;
    }
    @media(max-width: 768px){
      width: 300px;
    }
`