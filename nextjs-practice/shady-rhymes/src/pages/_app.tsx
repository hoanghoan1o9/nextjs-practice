// Libs
import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

import { useRouter } from 'next/router';
import { ROUTES } from '@constants/router';
import { getItem, IS_LOGIN } from '@helpers/localStorage';
import { useEffect } from 'react';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';
import { ErrorBoundary } from '@components/common/ErrorBoundary';

// Themes
import { CHAKRA_THEME } from '@themes/chakra';

// Providers
import { AppProvider } from '@contexts/AppProvider';

// Styles
import '@styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isBrowser = typeof window !== 'undefined';

  const router = useRouter();

  const isLogin = isBrowser && getItem(IS_LOGIN);

  useEffect(() => {
    if (!isLogin) {
      router.push(ROUTES.LOGIN);
    }
  }, [isLogin]);

  return (
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
};

export default MyApp;
