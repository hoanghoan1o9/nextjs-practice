// Libs
import React, { useEffect } from 'react';

// Contexts
import { useProduct } from 'contexts/ProductContext';

// Components
import Banner from './Banner';
import { ProductList } from 'components/ProductList';

// Constants
import { PRODUCT } from 'constants/product';

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
      <ProductList productList={productList} size={PRODUCT.SIZES_IMAGE.LARGE} />
    </section>
  );
};

export default HomePage;
