// Constants
import { APP_IMAGE_URLS } from '@constants/images';

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  category: string;
  image: { url: APP_IMAGE_URLS; alt: string };
}

export const Products: ProductProps[] = [
  {
    id: '1',
    title: 'Product',
    price: 673,
    category: 'category',
    image: {
      url: APP_IMAGE_URLS.BROWN_CHAIR,
      alt: 'Brown chair',
    },
  },
  {
    title: 'Product',
    price: 886,
    category: 'category',
    image: {
      url: APP_IMAGE_URLS.BROWN_CHAIR,
      alt: 'Brown chair',
    },
    id: '2',
  },
  {
    title: 'Product',
    price: 289,
    category: 'category',
    image: {
      url: APP_IMAGE_URLS.BROWN_CHAIR,
      alt: 'Brown chair',
    },
    id: '3',
  },
  {
    title: 'Product',
    price: 369,
    category: 'category',
    image: {
      url: APP_IMAGE_URLS.BROWN_CHAIR,
      alt: 'Brown chair',
    },
    id: '4',
  },
];
