// Libs
import { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { ROUTES } from '@constants/router';
import { getItem, IS_LOGIN } from '@helpers/localStorage';
import { useEffect } from 'react';

// Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';
import { ErrorBoundary } from '@components/common/ErrorBoundary';
import { SEO } from '@components/common/SEO';

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
      <ChakraProvider theme={CHAKRA_THEME}>
        <Suspense fallback={<LoadingIndicator />}>
          <AppProvider>
            <ErrorBoundary>
              <SEO
                props={{
                  title: 'NextJS | Shady Rhymes',
                  description: 'Shady Rhymes interiors design landing page',
                  url: 'https://shady-rhymes.vercel.app',
                  thumbnailUrl:
                    'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
                }}
              />
              <Component {...pageProps} />
            </ErrorBoundary>
          </AppProvider>
        </Suspense>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
