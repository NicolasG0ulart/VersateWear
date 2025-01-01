import styled from "styled-components";

export const Cart = styled.body`

    h1{
        color: #01114c;
        margin-top: 50px;
        font-size: 3rem;
        text-align: center;
    }
`
export const Content = styled.section`
    padding-inline: 150px;
    width: 100%;
    @media (max-width: 1440px) {
        padding-inline: 100px;
    }
    @media (max-width: 1024px) {
        padding-inline: 30px;
    }
`
export const Item = styled.div`
    padding-bottom: 15px;
    margin-top: 50px;
    border-bottom: solid #fc4b08;
    width: 100%;
    display: flex;
    justify-content: space-between;
    img{
        height: 100px;
    }
    h4{
        margin-top: 5px;
    }
    h4, h3{
        font-size: 1.4rem;
        color: #01114c;
    }
`
export const Product = styled.div`
    border: solid green;
    display: flex;
    gap: 35px;
`
export const Prices = styled.div`
    border: solid red;
`
export const Total = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    h2{
        color: #01114c;
    }
`
export const Finalizar = styled.button`
    margin-top: 20px;
    height: 50px;
    background-color: #01114c;
    color: #fc4b08;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    font-family: "Inter", serif;
    font-weight: 900;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fc4b08;
      color: #01114c;
    }
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  form{
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    h2{
        color: #01114c;
        margin-bottom: 20px;
    }
    label{
        color: #01114c;
        display: block;
        margin-bottom: 10px;
    }
    input{ 
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button{
        padding: 10px 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    &:hover{
        background-color: #45a049;
    }}
  }
`;