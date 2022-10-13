// Libraries
import Storybook from '@storybook/react';

// Components
import NavBar from './index';

// Constants
import { NAV_ITEMS } from '@constants/navigation';

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Storybook.ComponentMeta<typeof NavBar>;

const Template: Storybook.ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
);

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {
  navItems: NAV_ITEMS,
};
