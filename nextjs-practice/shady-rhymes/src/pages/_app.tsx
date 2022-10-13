// Libs
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// Themes
import { CHAKRA_THEME } from '@themes/chakra';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={CHAKRA_THEME}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
