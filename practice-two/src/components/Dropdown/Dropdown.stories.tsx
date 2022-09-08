// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Dropdown } from './index';

// Constants
import { DROPDOWN } from 'constants/dropdown';

// Styles
import 'styles/index.css';

const OPTION_DATA = [
  {
    key: 'none',
    option: 'Sort By',
    value: 'none',
  },
  {
    key: 'Title: A > Z',
    option: 'Title: A > Z',
    value: 'a-to-z',
  },
  {
    key: 'Title: Z > A',
    option: 'Title: Z > A',
    value: 'z-to-a',
  },
  {
    key: 'Price: Hightest > Lowest',
    option: 'Price: Hightest > Lowest',
    value: 'hightest-to-lowest',
  },
  {
    key: 'Price: Lowest > Hightest',
    option: 'Price: Lowest > Hightest',
    value: 'lowest-to-hightest',
  },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: DROPDOWN.SIZES.NORMAL,
  options: OPTION_DATA,
};
