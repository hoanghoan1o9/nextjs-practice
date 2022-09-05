// Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';

// Contexts
import { ProductProvider } from 'contexts/ProductContext';
import { CartProvider } from 'contexts/CartContext';

// Styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </ProductProvider>
    ,
  </React.StrictMode>,
);
