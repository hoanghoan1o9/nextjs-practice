// Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';

// Contexts
import { ProductProvider } from 'contexts/ProductContext';

// Styles
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
);
