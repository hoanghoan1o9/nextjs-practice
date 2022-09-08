// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { CartItem } from './index';

// Models
import { Cart } from 'models/cart';

// Styles
import 'styles/index.css';

const CART: Cart = {
  productId: '1',
  price: 25,
  title: 'Hal Earrings',
  colors: 'Black, Brows, White',
  src: 'https://i.ibb.co/PwnfVGC/Lira-Earrings.png',
  quantity: 11,
  isAddedToCart: false,
};

export default {
  title: 'Components/CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
);

export const CartItemBase = Template.bind({});
CartItemBase.args = {
  cart: CART,
  index: 0,
};
