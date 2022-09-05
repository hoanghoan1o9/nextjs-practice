// Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Models
import { Cart } from 'models/cart';

// Components
import Button from 'components/Button';
import Counter from 'components/Counter';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import './cartItem.css';

interface Props {
  cart: Cart;
  index: number;
  onDeleteCart: (id: string, index: number) => void;
}

const CartItem = ({
  cart: { id, price, title, colors, src, quantity },
  index,
  onDeleteCart,
}: Props): JSX.Element => (
  <li className="cart-item">
    <Link className="cart-item-link" to={`/products/${id}`}>
      <div className="cart-item-image">
        <img src={src} alt={title} />
      </div>
      <div className="cart-item-info">
        <h4 className="cart-item-info-title">{title}</h4>
        <p className="cart-item-info-color">{colors}</p>
        <p className="cart-item-info-price">$ {price},00 </p>
      </div>
      <Counter count={quantity} />
    </Link>
    <Button
      onClick={() => onDeleteCart(id, index)}
      type="button"
      style={BUTTON.STYLES.CLOSE}
      size={BUTTON.SIZES.CLOSE}
    >
      X
    </Button>
  </li>
);

export default CartItem;
