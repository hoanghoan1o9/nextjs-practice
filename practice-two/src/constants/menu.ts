// Models
import { INavigation } from 'components/Navigation';

//Images
import { userIcon, shoppingCartIcon, verticalLine } from 'assets/index';

export const MENU_LIST: INavigation[] = [
  {
    key: 'shop',
    label: 'Shop',
    path: 'products',
  },
  {
    key: 'blog',
    label: 'Blog',
    path: 'block',
  },
  {
    key: 'out story',
    label: 'Out Story',
    path: 'story',
  },
  {
    key: 'verticalLine',
    src: verticalLine,
    alt: 'verticalLine',
  },
  {
    key: 'shoppingCart',
    src: shoppingCartIcon,
    alt: 'shoppingCart',
    path: '/cart',
  },
  {
    key: 'userIcon',
    src: userIcon,
    alt: 'userIcon',
    path: '/user',
  },
];
