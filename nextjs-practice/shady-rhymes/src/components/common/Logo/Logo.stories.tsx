// Libraries
import Storybook from '@storybook/react';

// Components
import Logo from './index';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Storybook.ComponentMeta<typeof Logo>;

const Template: Storybook.ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
);

export const ImageChair = Template.bind({});
ImageChair.args = {
  alt: 'Logo',
  url: APP_IMAGE_URLS.WHITE_CHAIR,
  blurDataURL: APP_IMAGE_URLS.WHITE_CHAIR,
  width: 425,
  height: 400,
};
