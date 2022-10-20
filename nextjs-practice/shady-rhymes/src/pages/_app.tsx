// Libs
import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';
import { ErrorBoundary } from '@components/common/ErrorBoundary';

// Themes
import { CHAKRA_THEME } from '@themes/chakra';

// Providers
import { AppProvider } from '@contexts/AppProvider';

// Styles
import '@styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
    />
    <Script strategy="lazyOnload">
      {` 
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', ${process.env.GOOGLE_ANALYTICS});
        `}
    </Script>
      <ChakraProvider theme={CHAKRA_THEME}>
        <Suspense fallback={<LoadingIndicator />}>
          <AppProvider>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </AppProvider>
        </Suspense>
      </ChakraProvider>
  </>
);

export default MyApp;
