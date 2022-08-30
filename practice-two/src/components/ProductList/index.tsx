// Libs
import React, { CSSProperties, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

// Models
import { Product } from 'models/product';

// Contexts
import { useProduct } from 'contexts/ProductContext';

// Components
import ProductItem from 'components/ProductItem';

// Styles
import './productList.css';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

export interface IProducts {
  isLoading: boolean;
  message: string;
  style?: string;
  products: Product[];
}

const ProductList = (): JSX.Element => {
  const { productList, getProductList } = useProduct();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <section className="products">
      <div className={`product__info}`}>
        <h2 className="product__heading">Shop The Latest</h2>
        <Link className="product__link" to="products">
          View All
        </Link>
      </div>
      {/* {isLoading ? (
        <ClipLoader cssOverride={override} />
      ) : message ? (
        message
      ) : ( */}
      <ul className="product__list">
        {productList.map((product: Product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
      {/* )} */}
    </section>
  );
};

export default ProductList;
