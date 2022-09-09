// Libs
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Input } from './index';

// Constants
import { INPUT } from 'constants/input';

// Styles
import 'styles/index.css';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onKeyUp: { action: 'clicked' },
    onChange: { action: 'changed' },
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: true },
      description: 'Required',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      name: 'type',
      description: 'The input types',
      type: { name: 'string', required: true },
      table: {
        defaultValue: { summary: 'email' },
      },
    },
    style: {
      name: 'style',
      description: 'The input styles',
      table: {
        defaultValue: { summary: 'input--primary' },
      },
    },
    size: {
      name: 'size',
      description: 'The input sizes',
      table: {
        defaultValue: { summary: 'input--medium' },
      },
    },
    name: {
      name: 'name',
      description: 'The input name',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
  type: 'email',
  placeholder: 'Basic.',
  style: INPUT.STYLES.BASIC,
  size: INPUT.SIZES.SMALL,
};

export const Sizes = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <div style={{ marginRight: '20px' }}>
      <Input
        placeholder="input--small"
        type="email"
        style={INPUT.STYLES.BASIC}
        size={INPUT.SIZES.SMALL}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Input
        placeholder="input--medium"
        type="email"
        style={INPUT.STYLES.BASIC}
        size={INPUT.SIZES.MEDIUM}
      />
    </div>
  </div>
);

// export const Primary = Template.bind({});
// Primary.args = {
//   type: 'email',
//   placeholder: 'Give an email, get the newsletter.',
//   style: INPUT.STYLES.PRIMARY,
//   size: INPUT.SIZES.MEDIUM,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: 'text',
//   placeholder: 'Search...',
//   style: INPUT.STYLES.PRIMARY,
//   size: INPUT.SIZES.SMALL,
// };
