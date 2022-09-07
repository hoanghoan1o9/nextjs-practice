// Models
import { Cart } from 'models/cart';

// Store
import { CARTS_ACTIONS } from './constants';

export type GetCartList = {
  type: typeof CARTS_ACTIONS.GET_CART_LIST;
  payload: {
    cartList: Cart[];
  };
};

export type AddCart = {
  type: typeof CARTS_ACTIONS.ADD_CART;
  payload: {
    cart: Cart;
  };
};

export type DeleteCart = {
  type: typeof CARTS_ACTIONS.DELETE_CART;
  payload: {
    index: number;
  };
};

export type UpdateCart = {
  type: typeof CARTS_ACTIONS.UPDATE_CART;
  payload: {
    cart: Cart;
  };
};

export type CartAction = GetCartList | AddCart | DeleteCart | UpdateCart;
