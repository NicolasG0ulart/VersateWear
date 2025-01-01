import React, { useState } from "react";
import * as S from "./Styles";
import NavBar from "../../Components/Header/NavBar/NavBar";
import { useCart } from '../Cart/ContextCart';

export default function Cart() {
  const { cart } = useCart();
  const [showOverlay, setShowOverlay] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  // Converte os valores dos produtos para números e calcula o subtotal
  const subtotal = cart.reduce((acc, produto) => {
    const valorNumerico = parseFloat(produto.valor.replace('R$', '').replace(',', '.').trim());
    console.log("Valor numérico do produto:", valorNumerico);
    return acc + valorNumerico;
  }, 0);

  console.log("Subtotal calculado:", subtotal);

  const handleFinalize = () => {
    setShowOverlay(true);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

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
          {cart.length > 0 && (
            <S.Total>
              <h2>Sub total: R${subtotal.toFixed(2)}</h2>
              <S.Finalizar onClick={handleFinalize}>FINALIZAR COMPRA</S.Finalizar>
            </S.Total>
          )}
        </S.Content>
        {showOverlay && (
          <S.Overlay>
            {formStep === 1 && (
              <form onSubmit={handleNextStep}>
                <h2>Informações Pessoais</h2>
                <label>
                  Nome e Sobrenome:
                  <input type="text" name="name" required />
                </label>
                <label>
                  CPF:
                  <input type="text" name="cpf" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Celular:
                  <input type="tel" name="phone" required />
                </label>
                <button type="submit">Próximo</button>
              </form>
            )}
            {formStep === 2 && (
              <form onSubmit={handleNextStep}>
                <h2>Endereço Completo</h2>
                <label>
                  Endereço:
                  <input type="text" name="address" required />
                </label>
                <label>
                  Cidade:
                  <input type="text" name="city" required />
                </label>
                <label>
                  Estado:
                  <input type="text" name="state" required />
                </label>
                <label>
                  CEP:
                  <input type="text" name="zip" required />
                </label>
                <button type="submit">Próximo</button>
              </form>
            )}
            {formStep === 3 && (
              <form onSubmit={handleNextStep}>
                <h2>Método de Pagamento</h2>
                <label>
                  <input
                    type="radio"
                    value="cartao"
                    checked={paymentMethod === 'cartao'}
                    onChange={handlePaymentMethodChange}
                  /> Cartão de Crédito
                </label>
                <label>
                  <input
                    type="radio"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={handlePaymentMethodChange}
                  /> Pix
                </label>
                {/* Adicione outros métodos de pagamento, se necessário */}
                <button type="submit">Próximo</button>
              </form>
            )}
            {formStep === 4 && paymentMethod === 'cartao' && (
              <form onSubmit={handleNextStep}>
                <h2>Informações de Pagamento - Cartão de Crédito</h2>
                <label>
                  Número do Cartão:
                  <input type="text" name="cardNumber" required />
                </label>
                <label>
                  Nome no Cartão:
                  <input type="text" name="cardName" required />
                </label>
                <label>
                  Data de Validade:
                  <input type="text" name="expiryDate" required />
                </label>
                <label>
                  Código de Segurança (CVV):
                  <input type="text" name="cvv" required />
                </label>
                <button type="submit">Concluir Pagamento</button>
              </form>
            )}
            {formStep === 4 && paymentMethod === 'pix' && (
              <form onSubmit={handleNextStep}>
                <h2>Informações de Pagamento - Pix</h2>
                <p>Após concluir a compra, você receberá os dados para pagamento via Pix.</p>
                <button type="submit">Concluir Pagamento</button>
              </form>
            )}
          </S.Overlay>
        )}
      </S.Cart>
    </>
  );
}
