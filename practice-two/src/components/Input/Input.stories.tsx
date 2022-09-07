// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Input } from './index';

// Constants
import { INPUT } from 'constants/input';

// Styles
import '../../styles/index.css';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'email',
  placeholder: 'Give an email, get the newsletter.',
  style: INPUT.STYLES.PRIMARY,
  size: INPUT.SIZES.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'text',
  placeholder: 'Search...',
  style: INPUT.STYLES.PRIMARY,
  size: INPUT.SIZES.SMALL,
};
