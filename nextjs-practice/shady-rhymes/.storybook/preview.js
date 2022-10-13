// Import the global style enabling classes
import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from '@themes/chakra';

import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;

export const decorators = [
  (Story) => (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
