export interface Cart {
  id: string;
  productId: string;
  price: number;
  title?: string;
  colors?: string;
  src?: string;
  quantity: number;
  isAddedToCart: boolean;
}
