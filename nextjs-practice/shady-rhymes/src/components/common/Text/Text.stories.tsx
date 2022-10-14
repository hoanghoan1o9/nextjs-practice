// Libraries
import React from 'react';
import Storybook from '@storybook/react';

// Components
import Text from './index';

export default {
  title: 'Components/Text',
  component: Text,
} as Storybook.ComponentMeta<typeof Text>;

const Template: Storybook.ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const DefaultText = Template.bind({});
DefaultText.args = {
  value:
    'We are ready to help you build and also realize the room design that you dream of',
};

export const postCardTitleText = Template.bind({});
postCardTitleText.args = {
  value: 'Professionalism',
  size: 'medium',
  variant: 'secondary',
};

export const CardDescriptionText = Template.bind({});
CardDescriptionText.args = {
  value: 'We deliver the final work with great professional way.',
  size: 'xSmall',
  variant: 'description',
};

export const PageTitleText = Template.bind({});
PageTitleText.args = {
  value: 'Make Your Interior More Minimaistic & Modern',
  size: 'xLarge',
  variant: 'primary',
};
