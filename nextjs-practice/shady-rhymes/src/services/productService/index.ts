// Models
import { Product } from '@models/Product';

// Constants
import {
  BASE_URL_API,
  METHODS,
  HEADERS,
  API_ENDPOINTS,
} from '@constants/clientApis';

export class ProductClient {
  private readonly baseApi: string;

  constructor(baseApi: string) {
    this.baseApi = baseApi;
  }

  /**
   * Get products from server
   * @returns {Product[]} Product[]
   */
  getProductList = async (url: string): Promise<Product[]> => {
    // FIXME: Testing api
    const urlProducts = `${'https://63453164dcae733e8febb806.mockapi.io'}${url}`;
    const response = await fetch(urlProducts);

    return response.json();
  };

  getProduct = async (url: string, id: string): Promise<Product[]> => {
    // FIXME: Testing api
    const urlProduct = `${'https://63453164dcae733e8febb806.mockapi.io'}${url}/${id}`;
    const response = await fetch(urlProduct);

    return response.json();
  };

  addProduct = async (product: Product): Promise<Product> => {
    // FIXME: Testing api
    const url = `${'http://localhost:3000/api'}${API_ENDPOINTS.PRODUCTS}`;

    const response = await fetch(url, {
      method: METHODS.POST,
      headers: HEADERS,
      body: JSON.stringify(product),
    });

    return response.json();
  };

  addProductServer = async (product: Product): Promise<Product> => {
    // FIXME: Testing api
    const url = `${'https://63453164dcae733e8febb806.mockapi.io'}${
      API_ENDPOINTS.PRODUCTS
    }`;

    const response = await fetch(url, {
      method: METHODS.POST,
      headers: HEADERS,
      body: JSON.stringify(product),
    });

    return response.json();
  };

  deleteProduct = async (id: number): Promise<boolean> => {
    // FIXME: Testing api
    const url = `${'http://localhost:3000/api'}/${
      API_ENDPOINTS.PRODUCTS
    }/${id}`;
    const response = await fetch(url, {
      method: METHODS.DELETE,
      headers: HEADERS,
    });

    return !!response.ok;
  };

  deleteProductServer = async (id: string): Promise<boolean> => {
    // FIXME: Testing api
    const url = `${'https://63453164dcae733e8febb806.mockapi.io'}/${
      API_ENDPOINTS.PRODUCTS
    }/${id}`;
    const response = await fetch(url, {
      method: METHODS.DELETE,
      headers: HEADERS,
    });

    return !!response.ok;
  };

  patchProduct = async (product: Product): Promise<Product> => {
    // FIXME: Testing api
    const url = `${'http://localhost:3000/api'}/${API_ENDPOINTS.PRODUCTS}/${
      product.id
    }`;
    const response = await fetch(url, {
      method: METHODS.PATCH,
      headers: HEADERS,
      body: JSON.stringify(product),
    });

    return response.json();
  };

  patchProductServer = async (product: Product): Promise<Product> => {
    // FIXME: Testing api
    const url = `${'https://63453164dcae733e8febb806.mockapi.io'}${
      API_ENDPOINTS.PRODUCTS
    }/${product.id}`;
    const response = await fetch(url, {
      method: METHODS.PATCH,
      headers: HEADERS,
      body: JSON.stringify(product),
    });

    return response.json();
  };
}

export const ProductServices = new ProductClient(BASE_URL_API as string);
