export namespace API {}
export const BASE_URL_API = process.env.BASE_API_URL;

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export enum HEADERS {
  'Content-Type' = 'application/json',
}
