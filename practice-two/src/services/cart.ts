// Models
import { Cart } from 'models/cart';

// Constants
import { API } from 'constants/clientApis';

export class CartClient {
  private readonly baseApi: string;
  private readonly url: string;

  constructor(baseApi: string) {
    this.baseApi = baseApi;
    this.url = `${this.baseApi}${API.PATHS.CARTS}`;
  }
  /**
   * Get carts from server
   * @returns {Cart[]}
   */
  getCartList = async (): Promise<Cart[]> => {
    const response = await fetch(this.url);

    return response.json();
  };

  /**
   * Post new cart to server
   * @param {Cart} cart
   */
  addCart = async (cart: Cart): Promise<Cart> => {
    const response = await fetch(this.url, {
      method: API.HTTP_METHODS.POST,
      headers: API.HEADERS,
      body: JSON.stringify(cart),
    });

    return response.json();
  };

  /**
   * Delete cart at server by id
   * @param {String} id
   */
  deleteCart = async (id: string): Promise<void> => {
    const url = `${this.url}/${id}`;
    await fetch(url, {
      method: API.HTTP_METHODS.DELETE,
      headers: API.HEADERS,
    });
  };

  /**
   * Update cart at server
   * @param {Cart} cart
   */
  patchCart = async (cart: Cart): Promise<Cart> => {
    const url = `${this.url}/${cart.productId}`;
    const response = await fetch(url, {
      method: API.HTTP_METHODS.PATCH,
      headers: API.HEADERS,
      body: JSON.stringify(cart),
    });

    return response.json();
  };
}

export const CartServices = new CartClient(
  import.meta.env.VITE_BASE_URL_ENDPOINT,
);
