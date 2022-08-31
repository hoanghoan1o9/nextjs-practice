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

  getCartList = async (): Promise<Cart[]> => {
    const response = await fetch(this.url);

    return response.json();
  };

  addCart = async (data: Cart): Promise<Cart> => {
    const response = await fetch(this.url, {
      method: API.HTTP_METHODS.POST,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  };

  delete = async (): Promise<void> => {
    await fetch(this.url, {
      method: API.HTTP_METHODS.DELETE,
      headers: API.HEADERS,
    });
  };

  patch = async (data: Cart): Promise<Cart> => {
    const response = await fetch(this.url, {
      method: API.HTTP_METHODS.PATCH,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });

    return response.json();
  };
}

export const CartServices = new CartClient(
  import.meta.env.VITE_BASE_URL_ENDPOINT,
);
