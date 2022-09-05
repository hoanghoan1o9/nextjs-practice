// Libs
import React, { useEffect, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

// Contexts
import { useProduct } from 'contexts/ProductContext';
import { useCart } from 'contexts/CartContext';

// Pages
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';
import ErrorBoundary from 'pages/ErrorBoundaryPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductListPage from 'pages/ProductListPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import CartPage from 'pages/CartPage';

// Constants
import { MENU_LIST } from 'constants/menu';

const App = (): JSX.Element => {
  const { productList, getProductList } = useProduct();
  const { cartList, getCartList } = useCart();

  useEffect(() => {
    getProductList();
    getCartList();
  }, []);

  return (
    <>
      <Header menuList={MENU_LIST} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route
            path="/products/:productId"
            element={
              <ProductDetailPage
                productList={productList}
                cartList={cartList}
              />
            }
          />
          <Route
            path="cart"
            element={<CartPage productList={productList} cartList={cartList} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
