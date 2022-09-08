// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Button } from './index';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import 'styles/index.css';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'View Products',
  type: 'button',
  style: BUTTON.STYLES.PRIMARY,
  size: BUTTON.SIZES.LARGE,
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  children: 'PROCEED TO CHECKOUT',
  type: 'button',
  style: BUTTON.STYLES.SECONDARY,
  size: BUTTON.SIZES.LARGE,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'View Products',
  type: 'button',
  style: BUTTON.STYLES.SECONDARY,
  size: BUTTON.SIZES.LARGE,
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: 'View Products',
  type: 'button',
  style: BUTTON.STYLES.OUTLINE_SECONDARY,
  size: BUTTON.SIZES.LARGE,
};
