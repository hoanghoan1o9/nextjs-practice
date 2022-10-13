// Libraries
import React from 'react';
import Storybook from '@storybook/react';

// Components
import { Button } from '@components/common/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'Required',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      name: 'variant',
      description: 'The button styles',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      name: 'size',
      description: 'The button sizes',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};
