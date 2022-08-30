import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from 'contexts/ProductContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
);
