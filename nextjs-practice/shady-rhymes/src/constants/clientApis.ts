export namespace API {
  export const URL = {
    BASE: process.env.NEXT_PUBLIC_URL,
    LOCAL: process.env.NEXT_PUBLIC_URL_LOCAL,
    PRODUCTION: process.env.NEXT_PUBLIC_URL_PRODUCTION,
  };

  export const ENDPOINTS = {
    PRODUCTS: '/products',
  };

  export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  };

  export enum HEADERS {
    'Access-Control-Allow-Origin' = '*',
    'Access-Control-Allow-Methods' = 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers' = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  }
}
