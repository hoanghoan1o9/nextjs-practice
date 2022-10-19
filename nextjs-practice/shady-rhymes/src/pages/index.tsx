// Libs
import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// Components
import { ProductListSection } from '@components/sections/productListSection';
import { MainLayout } from '@components/layouts/mainLayout';
import { Banner } from '@components/featured/Banner';
import { AboutSection } from '@components/sections/aboutSection';
import { InforSection } from '@components/sections/InfoSection';

// Services
import { ProductServices } from '@services/productService';

// Context
import { useProduct } from '@contexts/ProductContext';

// Constants
import { API_ENDPOINTS } from '@constants/clientApis';
import { APP_ERRORS } from '@constants/errors';

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
        products: responseProducts,
      },
      // 10 seconds is for quickly testing.
      revalidate: 10,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        props: {
          error: error.message,
        },
        // 10 seconds is for quickly testing.
        revalidate: 10,
      };
    }

    return { props: {} };
  }
};

// FIXME: this field use for testing UI
export function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { setProductList } = useProduct();

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <MainLayout>
      <Banner />
      <AboutSection />
      <InforSection />
      <ProductListSection />
    </MainLayout>
  );
}

export default Home;
