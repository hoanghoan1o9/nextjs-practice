export interface Cart {
  id: string;
  price: number;
  title?: string;
  colors?: string;
  src?: string;
  quantity: number;
  isAddedToCart: boolean;
}
