// Libraries
import Storybook from '@storybook/react';

// Components
import { Input } from './index';

export default {
  title: 'Components/InputGroup',
  component: Input,
} as Storybook.ComponentMeta<typeof Input>;

const Template: Storybook.ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const TextInput = Template.bind({});
TextInput.args = {
  placeholder: 'Search Furniture',
};
