import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    border-radius: 10px;
    background-color: ghostwhite;
    padding: 15px;
    overflow: hidden;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    transition: .4s;
    @media(max-width: 1450px){
      width: 240px;
    }
    img{
        border-radius: 5px;
        height: 255px;
        @media(max-width: 1450px){
            height: 220px;
        }
        @media(max-width: 580px){
            height: 170px;
        }
        @media(max-width: 431px){
            height: 250px;
        }
    }
    h3{
        font-size: 1.5rem;
        color: #020c32;
    }
    h4{
        font-size: 1.3rem;
        color: #020c32;
    }
   button{
        color: #f24200;
        height: 45px;
        width: 240px;
        border-style: none;
        border-radius: 3px;
        background-color: #01114c;
        transition: 0.4s;
        font-size: 1.3rem;
        &:hover {
            color: #fa4400;
            cursor: pointer;
            background-color: #000c3a;
        }
        @media(max-width: 1450px){
            width: 200px;
        }
        @media(max-width: 580px){
            width: 170px;
        }
        @media(max-width: 431px){
            width: 250px;
        }
    }
    @media(max-width: 580px){
      width: 190px;
    }
    @media(max-width: 431px){
      width: 280px;
    }
`

export default function Card(props){

    function enviarWhatsApp() {
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
                <button onClick={enviarWhatsApp}>Conferir</button>
            </CardDiv>
        </>
    )
}