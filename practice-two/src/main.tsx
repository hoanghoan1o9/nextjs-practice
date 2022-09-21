// Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

// Components
import App from './App';

// Contexts
import { ProductProvider } from 'contexts/ProductContext';
import { CartProvider } from 'contexts/CartContext';

// Styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <ToastProvider>
          <Router>
            <App />
          </Router>
        </ToastProvider>
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>,
);
