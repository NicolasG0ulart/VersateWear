import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png"
import * as S from "./Styles.js";
import { FaCartPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export default function Header() {
  const [textoIndex, setTextoIndex] = useState(0);
  const textos = ["Seu novo Look começa aqui.", "Vista-se com confiança.", "Conforto e estilo em cada peça."];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoIndex((prevIndex) => (prevIndex + 1) % textos.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [textos.length]);

  return (
    <>
      <S.Header>
        <nav>
          <img src={Logo} alt="logo do site"/>
          <ul>
            <li>VANS</li>
            <li>HIGH</li>
            <li>NIKE</li>
          </ul>
          <FaCartPlus size={40} color="fff" />
        </nav>

        <S.Title>
          <h1 key={textoIndex}>{textos[textoIndex]}</h1>
          <p>
            Produtos de ótima qualidade e com ótimos preços.<br/>
            Design moderno e de qualidade que valorizam o visual.
          </p>
          <button>Conferir <span><FaArrowRight/></span></button>
        </S.Title>
      </S.Header>
    </>
  );
}
