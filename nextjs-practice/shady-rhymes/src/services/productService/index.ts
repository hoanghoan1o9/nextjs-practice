// Models
import { Product } from '@models/Product';

// Constants
import { API } from '@constants/clientApis';

/**
 * Get products from server
 * @returns {Product[]} Product[]
 */
export const getProductList = async (url: string): Promise<Product[]> => {
  const urlProducts = `${API.URL.BASE}${url}`;
  const response = await fetch(urlProducts);

  return response.json();
};

export const getProduct = async (
  url: string,
  id: string,
): Promise<Product[] | boolean> => {
  const urlProduct = `${API.URL.BASE}${url}/${id}`;
  const response = await fetch(urlProduct);
  if (response.status === 200) {
    return response.json();
  } else {
    return response.ok;
  }
};

export const addProduct = async (product: Product): Promise<Product> => {
  const url = `${API.URL.PRODUCTION}${API.ENDPOINTS.PRODUCTS}`;

  const response = await fetch(url, {
    method: API.METHODS.POST,
    headers: API.HEADERS,
    body: JSON.stringify(product),
  });

  return response.json();
};

export const addProductServer = async (product: Product): Promise<Product> => {
  const url = `${API.URL.BASE}${API.ENDPOINTS.PRODUCTS}`;

  const response = await fetch(url, {
    method: API.METHODS.POST,
    headers: API.HEADERS,
    body: JSON.stringify(product),
  });

  return response.json();
};

export const deleteProduct = async (id: number): Promise<boolean> => {
  const url = `${API.URL.PRODUCTION}/${API.ENDPOINTS.PRODUCTS}/${id}`;
  const response = await fetch(url, {
    method: API.METHODS.DELETE,
    headers: API.HEADERS,
  });

  return !!response.ok;
};

export const deleteProductServer = async (id: string): Promise<boolean> => {
  const url = `${API.URL.BASE}${API.ENDPOINTS.PRODUCTS}/${id}`;

  const response = await fetch(url, {
    method: API.METHODS.DELETE,
    headers: API.HEADERS,
  });

  return !!response.ok;
};

export const patchProduct = async (product: Product): Promise<Product> => {
  const url = `${API.URL.PRODUCTION}/${API.ENDPOINTS.PRODUCTS}/${product.id}`;
  const response = await fetch(url, {
    method: API.METHODS.PATCH,
    headers: API.HEADERS,
    body: JSON.stringify(product),
  });

  return response.json();
};

export const patchProductServer = async (
  product: Product,
): Promise<Product> => {
  const url = `${API.URL.BASE}${API.ENDPOINTS.PRODUCTS}/${product.id}`;
  const response = await fetch(url, {
    method: API.METHODS.PATCH,
    headers: API.HEADERS,
    body: JSON.stringify(product),
  });

  return response.json();
};
