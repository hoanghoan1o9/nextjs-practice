export namespace API {
  
  export const PATHS = {
    PRODUCTS: '/products',
    CARTS: '/carts',
  };

  export enum HEADERS {
    'Content-Type' = 'application/json',
  }

  export enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
  }
}
