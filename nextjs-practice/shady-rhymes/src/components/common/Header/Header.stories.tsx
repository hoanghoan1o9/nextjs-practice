// Libraries
import Storybook from '@storybook/react';

// Components
import { Header } from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as Storybook.ComponentMeta<typeof Header>;

export const DefaultHeader = () => <Header />;
