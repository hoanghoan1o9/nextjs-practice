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
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: true },
      description: 'Required',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      name: 'type',
      description: 'The button types',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    style: {
      name: 'style',
      description: 'The button styles',
      table: {
        defaultValue: { summary: 'btn--basic' },
      },
    },
    size: {
      name: 'size',
      description: 'The button sizes',
      table: {
        defaultValue: { summary: 'btn--small' },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  type: 'button',
  style: BUTTON.STYLES.BASIC,
  size: BUTTON.SIZES.SMALL,
};

export const Sizes = () => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--small"
        type="button"
        style={BUTTON.STYLES.PRIMARY}
        size={BUTTON.SIZES.SMALL}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--medium"
        type="button"
        style={BUTTON.STYLES.PRIMARY}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--large"
        type="button"
        style={BUTTON.STYLES.PRIMARY}
        size={BUTTON.SIZES.LARGE}
      />
    </div>
  </div>
);

export const Styles = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'silver',
      padding: '10px 10px',
    }}
  >
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--basic"
        type="button"
        style={BUTTON.STYLES.BASIC}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--primary"
        type="button"
        style={BUTTON.STYLES.PRIMARY}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--secondary"
        type="button"
        style={BUTTON.STYLES.SECONDARY}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
    <div style={{ marginRight: '20px' }}>
      <Button
        children="btn--secondary--outline"
        type="button"
        style={BUTTON.STYLES.OUTLINE_SECONDARY}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
    <div>
      <Button
        children="btn--primary--outline"
        type="button"
        style={BUTTON.STYLES.OUTLINE_PRIMARY}
        size={BUTTON.SIZES.MEDIUM}
      />
    </div>
  </div>
);
