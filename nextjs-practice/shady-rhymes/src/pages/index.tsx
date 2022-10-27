// Libs
import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// Components
import { ProductListSection } from '@components/sections/ProductList';
import { MainLayout } from '@components/layouts/MainLayout';
import { Banner } from '@components/feature/Banner';
import { AboutSection } from '@components/sections/About';
import { InfoSection } from '@components/sections/Info';
import { SEO } from '@components/common/SEO';

// Context
import { useProduct } from '@contexts/ProductContext';

// Services
import { ProductServices } from '@services/productService';

// Constants
import { API_ENDPOINTS } from '@constants/clientApis';
import { APP_ERRORS } from '@constants/errors';

// import api from '../services/api';

export const getStaticProps: GetStaticProps = async () => {
  // For testing ISR flow
  console.log('====Generate/ Re-generate Product List====');
  try {
    const responseProducts = await ProductServices.getProductList(
      API_ENDPOINTS.PRODUCTS,
    );

    if (!responseProducts) {
      throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
    }
    return {
      props: {
        products: responseProducts || [],
      },
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

export function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <MainLayout>
        <Banner />
        <AboutSection />
        <InfoSection />
        <ProductListSection />
      </MainLayout>
    </>
  );
}

export default Home;
