// Models
import { Product } from '@models/Product';

// Constants
import { ProductAction } from './actions';

// Constants
import { PRODUCT_ACTIONS } from './constants';

export interface ProductState {
  productList: Product[] | [];
}

export const initialProductState: ProductState = {
  productList: [],
};

export const productReducer = (
  state: ProductState = initialProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload.productList,
      };

    default:
      return state;
  }
};
