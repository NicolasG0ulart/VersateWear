import React, { useState } from "react";
import * as S from "./Styles";
import NavBar from "../../Components/Header/NavBar/NavBar";
import { useParams } from "react-router-dom";
import produtosJson from "../../catalog.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Product() {
  const { id } = useParams();

  const produtos = produtosJson.camisa; // Acessando o array "camisa" do JSON

  const [cart, setCart] = useState([]);

  const produto = produtos.find((p) => p.id === parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = produto ? produto.linkUrl : []; // Ajuste para array de URLs de imagens

  if (!produto) {
    return (
      <div>
        Produto não encontrado! <a href="/">Voltar para a lista de produtos</a>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    setCart([...cart, produto]);
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <>
      <S.ProductMain>
        <NavBar bgColor="#01114c" />
        <S.Content>
          <S.LeftSection>
            {images.length > 0 && (
              <S.CarouselButtons>
                <button onClick={handlePrev}>
                  <FaArrowLeft size={25} />
                </button>
                <img src={images[currentIndex]} alt="Imagem do produto" />
                <button onClick={handleNext}>
                  <FaArrowRight size={25} />
                </button>
              </S.CarouselButtons>
            )}
          </S.LeftSection>

          <S.RightSection>
            <h1>Camiseta {produto.marca}</h1>
            <h3>
              Preço: <span>{produto.valor}</span>
            </h3>
            <h3>
              Marca: <span>{produto.marca}</span>
            </h3>
            <h3>
              Tamanho: <span>{produto.tamanho}</span>
            </h3>
            <h3>
              Cor Predominante: <span>{produto.cor}</span>
            </h3>
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
          </S.RightSection>
        </S.Content>
      </S.ProductMain>
    </>
  );
}
