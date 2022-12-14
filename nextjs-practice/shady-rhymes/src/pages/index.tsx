// Libs
import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// Components
import { ProductListSection } from '@components/sections/ProductList';
import { MainLayout } from '@components/layouts/Main';
import { Banner } from '@components/feature/Banner';
import { AboutSection } from '@components/sections/About';
import { InfoSection } from '@components/sections/Info';
import { SEO } from '@components/common/SEO';

// Context
import { useProduct } from '@contexts/ProductContext';

// Services
import { getProductList } from '@services/productService';

// Constants
import { API } from '@constants/clientApis';
import { APP_ERRORS } from '@constants/errors';
import { NextPageWithLayout } from '@models/common';

// import api from '../services/api';

export const getStaticProps: GetStaticProps = async () => {
  // For testing ISR flow
  console.log('====Generate/ Re-generate Product List====');
  try {
    const responseProducts = await getProductList(API.ENDPOINTS.PRODUCTS);

    if (!responseProducts) {
      throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
    }

    return {
      props: {
        products: responseProducts || [],
      },
      revalidate: 5,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        props: {
          error: error.message,
        },
        revalidate: 5,
      };
    }

    return { props: {} };
  }
};

const Home: NextPageWithLayout = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setProductList } = useProduct();

  useEffect(() => {
    setProductList(products || []);
  }, []);

  return (
    <>
      <SEO
        props={{
          title: 'NextJS | Shady Rhymes',
          description: 'Shady Rhymes interiors design landing page',
          url: 'https://shady-rhymes.vercel.app',
          thumbnailUrl:
            'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
        }}
      />
      <Banner />
      <AboutSection />
      <InfoSection />
      <ProductListSection />
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
