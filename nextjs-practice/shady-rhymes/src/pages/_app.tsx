// Libs
import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';

// Themes
import { CHAKRA_THEME } from '@themes/chakra';

// Providers
import { AppProvider } from '@contexts/AppProvider';

// Styles
import '@styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={CHAKRA_THEME}>
    <Suspense fallback={<LoadingIndicator />}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Suspense>
  </ChakraProvider>
);

export default MyApp;
