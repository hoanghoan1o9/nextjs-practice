// Models
import { Product } from '@models/Product';

// Constants
import { BASE_URL_API } from '@constants/clientApis';

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
    const urlProducts = `${this.baseApi}${url}`;
    const response = await fetch(urlProducts);

    return response.json();
  };

  getProduct = async (url: string, id: string): Promise<Product[]> => {
    const urlProduct = `${this.baseApi}${url}/${id}`;
    const response = await fetch(urlProduct);

    return response.json();
  };
}

export const ProductServices = new ProductClient(BASE_URL_API as string);
