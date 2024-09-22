import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    overflow: hidden;
    width: 330px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    transition: .4s;

    img{
        border-radius: 5px;
        transition: .4s;
        width: 75%;
        &:hover {
            transform: scale(1.05);
        }
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
        width: 100%;
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

    return(
        <>
            <CardDiv>
                <img src={props.img} alt="Imagem de um dos produtos"/>
                <h3>{props.marca}</h3>
                <h4>{props.valor}</h4>
                <button>Conferir Disponibilidade</button>
            </CardDiv>
        </>
    )
}