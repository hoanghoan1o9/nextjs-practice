// Models
import { Cart } from 'models/cart';

// Actions
import { CartAction, DeleteCart, UpdateCart } from './actions';

// Constants
import { CARTS_ACTIONS } from './constants';

export interface CartState {
  // id: string;
  // cart: Cart | {};
  cartList: Cart[] | [];
}

export const initialCartState: CartState = {
  // id: '',
  // cart: {},
  cartList: [],
};

export const cartReducer = (
  state: CartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case CARTS_ACTIONS.GET_CART_LIST:
      return {
        ...state,
        cartList: action.payload.cartList,
      };

    case CARTS_ACTIONS.ADD_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload.cart],
      };

    case CARTS_ACTIONS.DELETE_CART:
      const newState = [...state.cartList];
      const myDeleteAction = action as DeleteCart;

      newState.splice(myDeleteAction.payload.index, 1);

      return {
        ...state,
        cartList: newState,
      };

    case CARTS_ACTIONS.UPDATE_CART:
      const myUpdateAction = action as UpdateCart;

      const cart = state.cartList.find(
        (cart) => cart.id === myUpdateAction.payload.id,
      );

      const index = state.cartList.findIndex(
        (cart) => cart.id === myUpdateAction.payload.id,
      );

      const newCartList = (state.cartList[index] = cart as Cart);

      return {
        ...state,
        cartList: [...state.cartList, newCartList],
      };

    default:
      return state;
  }
};
