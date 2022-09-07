// Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Models
import { Product } from 'models/product';

// Images
import { shoppingCartIcon, heartIcon, eyeIcon } from 'assets/index';

// Styles
import './productItem.css';

interface Props {
  product: Product;
  size?: string;
}

const ProductItem = ({
  product: { title, price, src, id },
  size,
}: Props): JSX.Element => (
  <li className="product__item">
    <Link to={`/products/${id}`}>
      <div className={`product__image ${size}`}>
        <img className="product__image-item" src={src} alt={title} />
        <div className="product__image-icon">
          <img src={shoppingCartIcon} alt="shoppingCartIcon" />
          <img src={heartIcon} alt="heartIcon" />
          <img src={eyeIcon} alt="eyeIcon" />
        </div>
      </div>
      <h3 className="product__title">{title}</h3>
      <p className="product__price">$ {price},00 </p>
    </Link>
  </li>
);
export { ProductItem };
