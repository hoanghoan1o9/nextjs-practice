// Libs
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';
import ErrorBoundary from 'pages/ErrorBoundaryPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProductListPage from 'pages/ProductListPage';

// Constants
import { MENU_LIST } from 'constants/menu';

const App = (): JSX.Element => {
  return (
    // <>
    //   <Header menuList={MENU_LIST} />
    //   <ErrorBoundary>
    //     <HomePage />
    //   </ErrorBoundary>
    // </>
    <>
      <Header menuList={MENU_LIST} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          {/* <Route
            path="/products/:productId"
            element={
              <ProductDetailPage
                products={products}
                cartList={cartList}
                isLoading={isLoading}
                message={message}
                count={count}
                onIncrease={this.handleClickIncrease}
                onDecrease={this.handleClickDecrease}
                onAddCart={this.handleAddCart}
                onUpdateCart={this.handleUpdateCart}
              />
            }
          /> */}
          {/* <Route
            path="cart"
            element={
              <CartPage
                isLoading={isLoading}
                products={products}
                carts={carts}
                cartList={cartList}
                message={message}
                totalPrice={totalPrice}
                onDeleteCart={this.handleDeleteCart}
              />
            }
          /> */}
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
