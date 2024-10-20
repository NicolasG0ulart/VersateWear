import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    border-top: 1px solid lightgrey;
    border-right: 0.5px solid lightgrey;
    border-left: 0.5px solid lightgrey;
    padding: 15px;
    overflow: hidden;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    transition: .4s;
    @media(max-width: 768px){
      width: 300px;
    }

    img{
        border-radius: 5px;
        height: 330px;
        width: 300px;
    }
    h3{
        font-size: 1.7rem;
        color: #020c32;
    }
    h4{
        font-size: 1.5rem;
        color: #020c32;
    }
   button{
        color: #f24200;
        height: 60px;
        width: 300px;
        border-style: none;
        border-radius: 3px;
        background-color: #01114c;
        transition: 0.4s;
        font-size: 1.5rem;
        &:hover {
            color: #fa4400;
            cursor: pointer;
            background-color: #000c3a;
        }
    }
    &:hover {
         background-color: ghostwhite;
    }
`

export default function Card(props){

    function enviarWhatsApp(produto, codigo, preco, linkProduto) {
        const numeroVendedor = '5532984770122';
        const mensagem = `Olá, gostaria de saber mais sobre a disponibilidade da ${props.marca} por R$ ${props.valor}. Veja o produto no link: ${props.img}`;
        const mensagemCodificada = encodeURIComponent(mensagem);
        const url = `https://wa.me/${numeroVendedor}?text=${mensagemCodificada}`;
        window.open(url, '_blank');
      }

    return(
        <>
            <CardDiv>
                <img src={props.img} alt="Imagem de um dos produtos"/>
                <h3>{props.marca}</h3>
                <h4>{props.valor}</h4>
                <button onClick={enviarWhatsApp}>Conferir Disponibilidade</button>
            </CardDiv>
        </>
    )
}