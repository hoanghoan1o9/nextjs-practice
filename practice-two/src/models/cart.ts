export interface Cart {
  productId : string;
  price: number;
  title?: string;
  colors?: string;
  src?: string;
  quantity: number;
  isAddedToCart: boolean;
}
