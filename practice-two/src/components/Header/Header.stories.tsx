// Libs
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Header } from 'components/Header';

// Images
import { userIcon, shoppingCartIcon, verticalLine } from 'assets/index';

// Styles
import '../../styles/index.css';

const MENU_LIST = [
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

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const HeaderBase = () => <Header menuList={MENU_LIST} />;
