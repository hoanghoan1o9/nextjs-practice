// Libs
import { createContext, useContext, useReducer } from 'react';

// Services
import { ProductServices } from 'services/product';

// Store
import { PRODUCTS_ACTIONS } from 'store/product/constants';

import {
  initialProductState,
  productReducer,
  ProductState,
} from 'store/product/reducer';

interface ProductContextValue extends ProductState {
  getProductList: () => void;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext<ProductContextValue>({
  ...initialProductState,
  getProductList: () => Promise<void>,
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const getProductList = async (): Promise<void> => {
    const response = await ProductServices.getProductList();

    dispatch({
      type: PRODUCTS_ACTIONS.GET_PRODUCT_LIST,
      payload: {
        productList: response,
      },
    });
  };

  return (
    <ProductContext.Provider value={{ ...state, getProductList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
