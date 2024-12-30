import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const CardDiv = styled.div`
    border-radius: 10px;
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
const LinkStyled = styled(Link)`
  color: #fc4b08;
  text-decoration: none;
`

export default function Card({ id, img, marca, valor }) {
    return (
      <CardDiv>
        <img src={img} alt="Imagem de um dos produtos" />
        <h3>{marca}</h3>
        <h4>{valor}</h4>
        <LinkStyled to={`/product/${id}`}>
          <button>
            Conferir
          </button>
        </LinkStyled>
      </CardDiv>
    );
  }
  