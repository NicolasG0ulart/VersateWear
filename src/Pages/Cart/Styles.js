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
    justify-content: flex-end;
    h2{
        color: #01114c;
    }
`