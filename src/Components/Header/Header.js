import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar.js"
import * as S from "./Styles.js";
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
     <NavBar/>
      <S.Header>
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
