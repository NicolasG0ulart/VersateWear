import React from "react";
import * as S from "./Styles";
import NavBar from "../../Components/Header/NavBar/NavBar";
import { useCart } from '../Cart/ContextCart';

export default function Cart() {
  const { cart } = useCart();

  // Converte os valores dos produtos para números e calcula o subtotal
  const subtotal = cart.reduce((acc, produto) => {
    const valorNumerico = parseFloat(produto.valor.replace('R$', '').replace(',', '.').trim());
    console.log("Valor numérico do produto:", valorNumerico);
    return acc + valorNumerico;
  }, 0);

  console.log("Subtotal calculado:", subtotal);

  return (
    <> 
      <S.Cart>
        <NavBar bgColor="#01114c" />
        <h1>SEU CARRINHO</h1>
        <S.Content>
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            cart.map((produto, index) => (
              <S.Item key={index}>
                <S.Product>
                  <img src={produto.linkUrl[0]} alt='imagem do produto'/>
                  <div>
                    <h3>Camisa {produto.marca}</h3>
                    <h4>Cor: {produto.cor}</h4>
                    <h4>Tamanho: {produto.tamanho}</h4>
                  </div>
                </S.Product>
                <S.Prices>
                  <div>
                    <h4>Valor: {produto.valor}</h4>
                    <h4>Desconto: R$0</h4>
                  </div>
                </S.Prices>
              </S.Item>
            ))
          )}
          <S.Total>
            <h2>Sub total: R${subtotal.toFixed(2)}</h2>
          </S.Total>
        </S.Content>
      </S.Cart>
    </>
  );
}
