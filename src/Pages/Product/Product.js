import React, { useState } from "react";
import * as S from "./Styles";
import NavBar from "../../Components/Header/NavBar/NavBar";
import { useParams } from "react-router-dom";
import produtosJson from "../../catalog.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useCart } from '../Cart/ContextCart';

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const produtos = produtosJson.camisa;

  const produto = produtos.find((p) => p.id === parseInt(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = produto ? produto.linkUrl : [];

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
              Preço: {produto.valor}
            </h3>
            <h3>
              Marca: {produto.marca}
            </h3>
            <h3>
              Tamanho: {produto.tamanho}
            </h3>
            <h3>
              Cor Predominante: {produto.cor}
            </h3>
            <button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</button>
          </S.RightSection>
        </S.Content>
      </S.ProductMain>
    </>
  );
}
