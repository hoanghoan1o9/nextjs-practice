// Libs
import { createContext, useContext, useReducer } from 'react';

// Services
import { CartServices } from 'services/cart';

// Store
import { CARTS_ACTIONS } from 'store/cart/constants';

import { initialCartState, cartReducer, CartState } from 'store/cart/reducer';

// Models
import { Cart } from '../models/cart';

interface CartContextValue extends CartState {
  getCartList: () => void;
  addCart: (cart: Cart) => void;
  deleteCart: (id: string, index: number) => void;
  updateCart: (id: string, cart: Cart) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextValue>({
  ...initialCartState,
  getCartList: () => Promise<Cart[]>,
  addCart: () => Promise<Cart>,
  deleteCart: () => Promise<Cart>,
  updateCart: () => Promise<void>,
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const getCartList = async (): Promise<void> => {
    const response = await CartServices.getCartList();

    dispatch({
      type: CARTS_ACTIONS.GET_CART_LIST,
      payload: {
        cartList: response,
      },
    });
  };

  const addCart = async (data: Cart): Promise<void> => {
    const response = await CartServices.addCart(data);

    dispatch({
      type: CARTS_ACTIONS.ADD_CART,
      payload: {
        cart: response,
      },
    });
  };

  const deleteCart = async (id: string, index: number): Promise<void> => {
    await CartServices.deleteCart(id);

    dispatch({
      type: CARTS_ACTIONS.DELETE_CART,
      payload: {
        index,
      },
    });
  };

  const updateCart = async (id: string, data: Cart): Promise<void> => {
    const response = await CartServices.patchCart(id, data);

    dispatch({
      type: CARTS_ACTIONS.UPDATE_CART,
      payload: {
        id,
        cart: response,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{ ...state, getCartList, deleteCart, addCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
