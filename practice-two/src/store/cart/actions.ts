// Models
import { Cart } from 'models/cart';

// Store
import { CARTS_ACTIONS } from './constants';

export type getCartList = {
  type: typeof CARTS_ACTIONS.GET_CART_LIST;
  payload: {
    cartList: Cart[];
  };
};

export type addCart = {
  type: typeof CARTS_ACTIONS.ADD_CART;
  payload: {
    cart: Cart;
  };
};

export type CartAction = getCartList | addCart;
