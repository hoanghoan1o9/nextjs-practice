// Models
import { Product } from 'models/product';

// Store
import { PRODUCTS_ACTIONS } from './constants';

export type getProductList = {
  type: typeof PRODUCTS_ACTIONS.GET_PRODUCT_LIST;
  payload: {
    productList: Product[];
  };
};

export type ProductAction = getProductList;
