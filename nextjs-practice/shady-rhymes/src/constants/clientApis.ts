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
    'Content-Type' = 'application/x-www-form-urlencoded; charset=UTF-8',
    "Access-Control-Allow-Methods" = "GET,POST,PUT,DELETE,OPTIONS",
  }
}
