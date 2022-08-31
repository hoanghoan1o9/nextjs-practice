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
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextValue>({
  ...initialCartState,
  getCartList: () => Promise<Cart[]>,
  addCart: () => Promise<Cart>,
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const getCartList = async (): Promise<void> => {
    const response = await CartServices.getCartList();
    const responseData: Cart[] = response;

    dispatch({
      type: CARTS_ACTIONS.GET_CART_LIST,
      payload: {
        cartList: responseData,
      },
    });
  };

  const addCart = async (data: Cart): Promise<void> => {
    const response = await CartServices.addCart(data);
    const responseData: Cart = response;

    dispatch({
      type: CARTS_ACTIONS.ADD_CART,
      payload: {
        cart: responseData,
      },
    });
  };
  
  return (
    <CartContext.Provider value={{ ...state, getCartList, addCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
