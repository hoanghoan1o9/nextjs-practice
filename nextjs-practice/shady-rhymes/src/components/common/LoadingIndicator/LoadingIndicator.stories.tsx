// Libraries
import Storybook from '@storybook/react';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';

export default {
  title: 'Components/Button',
  component: LoadingIndicator,
} as Storybook.ComponentMeta<typeof LoadingIndicator>;

const Template: Storybook.ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'xl',
};
