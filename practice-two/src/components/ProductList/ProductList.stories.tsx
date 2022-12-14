// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { ProductList } from 'components/ProductList';

//Constants
import { PRODUCT } from 'constants/product';

// Styles
import 'styles/index.css';

const PRODUCTS = [
  {
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
  },
  {
    id: '2',
    src: 'https://i.ibb.co/5cSYMCM/Hair-Pin-Set-of-3.png',
    title: 'Kaede Hair Pin Set Of 4',
    price: 40,
    weight: 0.3,
    dimensions: '15 * 10 * 1 cm',
    colors: 'Black, Brows, White',
    material: 'Gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
  },
  {
    id: '3',
    src: 'https://i.ibb.co/BcyCKhQ/Yuki-Hair-Pin-Set-of-3.png',
    title: 'Kaede Hair Pin Set Of 3',
    price: 30,
    weight: 0.3,
    dimensions: '15 * 10 * 1 cm',
    colors: 'Black, Brows, White',
    material: 'Gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
  },
  {
    id: '4',
    src: 'https://i.ibb.co/C6t2c9z/Hal-Earrings.png',
    title: 'Lira Earrings',
    price: 20,
    weight: 0.3,
    dimensions: '15 * 10 * 1 cm',
    colors: 'Black, Brows, White',
    material: 'Gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
  },
  {
    id: '5',
    src: 'https://i.ibb.co/d2DmM2w/Plaine-Necklace.png',
    title: 'Plaine Necklace',
    price: 19,
    weight: 0.3,
    dimensions: '15 * 10 * 1 cm',
    colors: 'Black, Brows, White',
    material: 'Gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
  },
  {
    id: '6',
    src: 'https://i.ibb.co/dbv0HDd/Kaede-Hair-Pin-Set-Of-3.png',
    title: 'Yuki Hair Pin Set of 3',
    price: 29,
    weight: 0.3,
    dimensions: '15 * 10 * 1 cm',
    colors: 'Black, Brows, White',
    material: 'Gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
  },
];

export default {
  title: 'Components/ProductList',
  component: ProductList,
  argTypes: {
    size: {
      name: 'sizes',
      type: { name: 'string', required: true },
      description: 'The size of the product list image',
      table: {
        defaultValue: { summary: 'image--large' },
      },
    },
    style: {
      name: 'styles',
      type: { name: 'string', required: true },
      description: 'The style of the product list image',
      table: {
        type: { summary: 'medium' },
        defaultValue: { summary: 'medium' },
      },
    },
    productList: {
      name: 'productList',
      description: 'The list of product',
      table: {
        type: { summary: 'T[]' },
        defaultValue: { summary: '[]' },
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
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const ProductListBase = Template.bind({});
ProductListBase.args = {
  size: PRODUCT.SIZES_IMAGE.LARGE,
  style: PRODUCT.STYLES.MEDIUM,
  productList: PRODUCTS,
};
