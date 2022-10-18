// Models
import { Product } from '@models/Product';

// Constants
import { PRODUCT_ACTIONS } from './constants';

export type GetProductList = {
  type: PRODUCT_ACTIONS.SET_PRODUCT_LIST;
  payload: {
    productList: Product[];
  };
};

export type ProductAction = GetProductList;
