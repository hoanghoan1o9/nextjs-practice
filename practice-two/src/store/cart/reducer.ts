// Models
import { Cart } from 'models/cart';

// Actions
import { CartAction } from './actions';

// Constants
import { CARTS_ACTIONS } from './constants';

export interface CartState {
  cartList: Cart[] | [];
}

export const initialCartState: CartState = {
  cartList: [],
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CARTS_ACTIONS.GET_CART_LIST:
      return {
        ...state,
        cartList: action.payload.cartList,
      };

    case CARTS_ACTIONS.ADD_CART:
      return {
        ...state,
        cart: action.payload.cart,
      };

    default:
      return state;
  }
};
