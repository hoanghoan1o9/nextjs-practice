// Models
import { Product } from 'models/product';
import { API } from 'constants/clientApis';

export class ProductClient {
  private readonly baseApi: string;

  constructor(baseApi: string) {
    this.baseApi = baseApi;
  }

  getProductList = async (): Promise<Product[]> => {
    const url = `${this.baseApi}${API.PATHS.PRODUCTS}`;
    const response = await fetch(url);

    return response.json();
  };
}

export const ProductServices = new ProductClient(
  import.meta.env.VITE_BASE_URL_ENDPOINT,
);
