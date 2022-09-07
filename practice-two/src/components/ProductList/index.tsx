// Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Models
import { Product } from 'models/product';

// Components
import { ProductItem } from 'components/ProductItem';

//Constants
import { PRODUCT } from 'constants/product';

// Styles
import './productList.css';

interface Props {
  productList: Product[];
  style?: PRODUCT.STYLES;
  size?: PRODUCT.SIZES_IMAGE;
}

const ProductList = ({ productList = [], style, size }: Props): JSX.Element => (
  <section className="products">
    <div className={`product__info ${style}`}>
      <h2 className="product__heading">Shop The Latest</h2>
      <Link className="product__link" to="products">
        View All
      </Link>
    </div>
    <ul className="product__list">
      {productList.map((product: Product) => (
        <ProductItem product={product} key={product.id} size={size} />
      ))}
    </ul>
  </section>
);

export { ProductList };
