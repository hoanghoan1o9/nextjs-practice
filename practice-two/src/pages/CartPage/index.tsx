// Libs
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

// Contexts
import { useCart } from 'contexts/CartContext';

// Models
import { Product } from 'models/product';
import { Cart } from 'models/cart';

// Components
import { CartItem } from './CartItem';
import { Button } from 'components/Button';

// Constants
import { BUTTON } from 'constants/button';
import { MESSAGE } from 'constants/messages';

// Helpers
import { generateCartList } from 'helpers/carts';

// Styles
import './cartPage.css';

interface Props {
  productList: Product[];
  cartList: Cart[];
}

const CartPage = ({ productList, cartList }: Props): JSX.Element => {
  const { carts, totalPriceCart } = generateCartList(cartList, productList);
  const { deleteCart } = useCart();
  const { addToast } = useToasts();

  const handleDeleteCart = (id: string, index: number): void => {
    try {
      deleteCart(id, index);

      addToast(MESSAGE.SUCCESS.REMOVE, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (error) {
      if (error instanceof Error)
        addToast(MESSAGE.ERRORS.REMOVE, {
          appearance: 'error',
          autoDismiss: true,
        });
    }
  };

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products', { replace: true });
  };

  return (
    <section className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-info">
        <div>
          <ul className="product__item">
            {carts.map((cart: Cart, index: number) => (
              <CartItem
                index={index}
                cart={cart}
                key={cart.productId}
                onDeleteCart={handleDeleteCart}
              />
            ))}
          </ul>
        </div>
        <div className="cart-checkout">
          <h4 className="cart-checkout-title">Cart totals</h4>
          <p className="cart-checkout-price">
            TOTAL <span>{totalPriceCart},00 $</span>
          </p>
          <Button
            size={BUTTON.SIZES.LARGE}
            style={BUTTON.STYLES.SECONDARY}
            type="button"
          >
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
      <Button type="button" onClick={handleNavigate}>
        UPDATE CART
      </Button>
    </section>
  );
};

export default CartPage;
