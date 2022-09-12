// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { ProductItem } from 'components/ProductItem';

//Constants
import { PRODUCT } from 'constants/product';

// Styles
import 'styles/index.css';

const PRODUCT_ITEM = {
  id: '1',
  src: 'https://i.ibb.co/PwnfVGC/Lira-Earrings.png',
  title: 'Hal Earrings',
  price: 25,
  weight: 0.3,
  dimensions: '15 * 10 * 1 cm',
  colors: 'Black, Brows, White',
  material: 'Gold',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
};

export default {
  title: 'Components/ProductItem',
  component: ProductItem,
  argTypes: {
    product: {
      name: 'product',
      description: 'The product item',
      table: {
        type: { summary: 'T{}' },
      },
    },
    size: {
      name: 'size',
      description: 'The product sizes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'image--large' },
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const ProductItemBase = Template.bind({});
ProductItemBase.args = {
  size: PRODUCT.SIZES_IMAGE.LARGE,
  product: PRODUCT_ITEM,
};
