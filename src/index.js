import React from 'react';
import ReactDOM from 'react-dom/client';
import VersateWear from './VersateWear';
import { CartProvider } from './Pages/Cart/ContextCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <VersateWear />
    </CartProvider>
  </React.StrictMode>
);
