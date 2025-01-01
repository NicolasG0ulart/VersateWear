import React, { createContext, useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const fadeOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const AlertContainer = styled.div`
    padding: 20px;
    background-color: ${props => props.bgColor || '#f44336'};
    font-family: "Lilita One", sans-serif;
    color: white; /* Cor do texto */
    margin-bottom: 15px; /* Espaço inferior */
    border-radius: 5px; /* Borda arredondada */
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
`;

const CloseButton = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: black;
    }
`;

const ProgressBar = styled.div`
    height: 5px;
    background-color: #ffffff;
    animation: ${fadeOut} 3s linear;
`;

const Alert = ({ message, onClose, bgColor }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); // 3 segundos

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <AlertContainer bgColor={bgColor}>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {message}
            <ProgressBar />
        </AlertContainer>
    );
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [alertMessage, setAlertMessage] = useState('');
    const [bgColor, setBgColor] = useState('#f44336'); // Cor padrão

    const addToCart = (produto) => {
        const produtoExistente = cart.find((item) => item.id === produto.id);
        
        if (produtoExistente) {
            setAlertMessage("Este produto já está no carrinho");
            setBgColor('#fc4b08'); // Cor de aviso
        } else {
            setCart([...cart, produto]);
            setAlertMessage("Adicionado ao Carrinho!");
            setBgColor('green'); // Cor de sucesso
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
            {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage('')} bgColor={bgColor} />}
        </CartContext.Provider>
    );
};
