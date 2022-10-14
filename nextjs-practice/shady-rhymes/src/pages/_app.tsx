// Libs
import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';

// Themes
import { CHAKRA_THEME } from '@themes/chakra';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={CHAKRA_THEME}>
    <Suspense fallback={<LoadingIndicator />}>
      <Component {...pageProps} />
    </Suspense>
  </ChakraProvider>
);

export default MyApp;
