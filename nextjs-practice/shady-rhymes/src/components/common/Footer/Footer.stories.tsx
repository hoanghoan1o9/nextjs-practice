// Libraries
import Storybook from '@storybook/react';

// Components
import { Footer } from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Storybook.ComponentMeta<typeof Footer>;

export const DefaultFooter = () => <Footer />;
