// Libs
import React, { useState, useCallback, memo } from 'react';
import { useToasts } from 'react-toast-notifications';

// Contexts
import { useCart } from 'contexts/CartContext';

// Models
import { Product } from 'models/product';
import { Cart } from 'models/cart';

// Components
import ProductAdditionalInfo from '../ProductAdditionInfo';
import { Button } from 'components/Button';
import { Counter } from 'components/Counter';

// Constants
import { BUTTON } from 'constants/button';
import { MESSAGE } from 'constants/messages';

// Styles
import './productInfo.css';

interface Props {
  isAddedToCart: boolean;
  cart?: Cart;
  product: Product;
}

const ProductInfo = ({ isAddedToCart, product, cart }: Props): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const { addCart, updateCart } = useCart();
  const { addToast } = useToasts();
  const { id, src, title, price, description } = product;

  const handleAddCart = (id: string): void => {
    try {
      const quantity = count;
      const cartData = { id, quantity } as Cart;

      addCart(cartData);

      addToast(MESSAGE.SUCCESS.ADD, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (error) {
      if (error instanceof Error)
        addToast(MESSAGE.ERRORS.ADD, {
          appearance: 'error',
          autoDismiss: true,
        });
    }
  };

  const handleUpdateCart = (id: string): void => {
    try {
      if (cart) {
        const quantity = cart.quantity + count;
        const newCart = { id, quantity } as Cart;

        updateCart(newCart);
        addToast(MESSAGE.SUCCESS.UPDATE, {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    } catch (error) {
      if (error instanceof Error)
        addToast(MESSAGE.ERRORS.UPDATE, {
          appearance: 'error',
          autoDismiss: true,
        });
    }
  };

  const handleIncrease = useCallback((): void => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback((): void => {
    setCount((prev) => prev - 1);
  }, []);

  const handleAction = (): void => {
    isAddedToCart ? handleUpdateCart(id) : handleAddCart(id);
  };

  return (
    <>
      <section className="product-info">
        <ul className="product-info-list-img">
          <li className="product-info-item">
            <img className="product-info-item-image" src={src} alt={title} />
          </li>
          <li className="product-info-item">
            <img className="product-info-item-image" src={src} alt={title} />
          </li>
          <li className="product-info-item">
            <img className="product-info-item-image" src={src} alt={title} />
          </li>
          <li className="product-info-item">
            <img className="product-info-item-image" src={src} alt={title} />
          </li>
        </ul>
        <figure className="product-info-banner">
          <img className="product-info-banner-image" src={src} alt={title} />
          <div>
            <h3 className="product-info--banner-heading">{title}</h3>
            <p className="product-info--banner-price">$ {price},00</p>
            <div className="product-info--banner-description">
              {description}
            </div>
            <div className="product-info--banner-action">
              <Counter
                count={count}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
              <Button
                type="submit"
                size={BUTTON.SIZES.LARGE}
                style={BUTTON.STYLES.OUTLINE_SECONDARY}
                onClick={handleAction}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </figure>
      </section>
      <ProductAdditionalInfo product={product} />
    </>
  );
};

export default memo(ProductInfo);
