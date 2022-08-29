// Models
import { Product } from 'models/product';

// Actions
import { ProductAction } from './actions';

// Constants
import { PRODUCTS_ACTIONS } from './constants';

export interface ProductState {
  productList: Product[] | [];
}

export const initialProductState: ProductState = {
  productList: [],
};

export const productReducer = (state: ProductState, action: ProductAction) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload.productList,
      };

    default:
      return state;
  }
};
