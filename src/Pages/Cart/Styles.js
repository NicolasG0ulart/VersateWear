import styled from "styled-components";

export const Cart = styled.body`
    background-color: #01114c;

    h1{
        margin-top: 50px;
        font-size: 3rem;
        text-align: center;
    }
`
export const Content = styled.section`
    margin-top: 100px;
    padding-inline: 150px;
    display: flex;
    @media(max-width: 1440px){
        padding-inline: 100px;
    }
    @media(max-width: 1024px){
        padding-inline: 30px;
    }
`
export const Left = styled.div`
    width: 60%;
    height: 500px;

    div{
        border-bottom: #fc4b08 solid;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
        ul{
            padding-right: 150px;
            display: flex;
            gap: 100px;
        }
    }
    .image{
        border: solid red;
        display: flex;
        align-items: center;
        gap: 30px;

        img{
            height: 150px;
        }
        h4{
            font-size: 1.7rem;
        }
    }
    .infos{
        width: 57%;
        display: flex;
        justify-content: space-between;
        border: solid blue;
    }
`
export const Item = styled.div`
    
`
export const Right = styled.div`
    width: 40%;
`