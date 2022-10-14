// Libraries
import Storybook from '@storybook/react';

// Components
import { CardItem } from './index';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

export default {
  title: 'Components/CardItem',
  component: CardItem,
} as Storybook.ComponentMeta<typeof CardItem>;

const Template: Storybook.ComponentStory<typeof CardItem> = (args) => (
  <CardItem {...args} />
);

export const Card = Template.bind({});
Card.args = {
  href: APP_IMAGE_URLS.CHECK_ICON,
  title: 'Professionalism',
  description: 'We deliver the final work with great professional way.',
};
