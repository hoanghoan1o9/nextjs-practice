// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Counter } from './index';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import '../../styles/index.css';

export default {
  title: 'Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  count: 10,
  style: BUTTON.STYLES.PRIMARY,
  size: BUTTON.SIZES.SMALL,
};
