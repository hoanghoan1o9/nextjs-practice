// Models
import { Product } from 'models/product';

// Store
import { PRODUCTS_ACTIONS } from './constants';

export type GetProductList = {
  type: typeof PRODUCTS_ACTIONS.GET_PRODUCT_LIST;
  payload: {
    productList: Product[];
  };
};

export type ProductAction = GetProductList;
