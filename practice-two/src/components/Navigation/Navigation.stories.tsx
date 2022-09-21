// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Navigation } from 'components/Navigation';

// Images
import { userIcon, shoppingCartIcon, verticalLine } from 'assets/index';

// Styles
import 'styles/index.css';

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
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    menuList: {
      name: 'menuList',
      description: 'The list of navigation items',
      table: {
        type: { summary: 'T[]' },
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
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const NavigationBase = Template.bind({});
NavigationBase.args = {
  menuList: MENU_LIST,
};
