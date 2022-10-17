// Libraries
import React, { createContext, useContext, useReducer } from 'react';

// Models
import { Product } from '@models/Product';

// Stores
import { PRODUCT_ACTIONS } from '@stores/product/constants';
import {
  initialProductState,
  productReducer,
  ProductState,
} from '@stores/product/reducer';

interface ProductContextValue extends ProductState {
  setProductList: (productList: Product[]) => void;
}

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext<ProductContextValue>(
  {} as ProductContextValue,
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const setProductList = (productList: Product[]): void => {
    dispatch({
      type: PRODUCT_ACTIONS.SET_PRODUCT_LIST,
      payload: {
        productList: productList,
      },
    });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        setProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
