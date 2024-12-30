import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (produto) => {
    const produtoExistente = cart.find((item) => item.id === produto.id);
    
    if (produtoExistente) {
      alert("Produto já foi adicionado ao carrinho!");
    } else {
      setCart([...cart, produto]);
      alert("Produto adicionado ao carrinho!");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
