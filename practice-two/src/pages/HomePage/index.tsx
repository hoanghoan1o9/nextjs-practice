// Libs
import React, { useEffect } from 'react';

// Models
import { Product } from 'models/product';

// Contexts
import { useProduct } from 'contexts/ProductContext';

// Components
import Banner from './Banner';
import ProductList from 'components/ProductList';

// Styles
import './homePage.css';

const HomePage = (): JSX.Element => {
  const { productList, getProductList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <section className="home-page">
      <Banner />
      <ProductList productList={productList} />
    </section>
  );
};

export default HomePage;
