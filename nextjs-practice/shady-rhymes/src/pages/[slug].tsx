// Libraries
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// Components
import { DetailProduct } from '@components/sections/detailProduct';
// Layouts
import { MainLayout } from '@components/layouts/mainLayout';

// Constants
import { APP_ERRORS } from '@constants/errors';
import { API_ENDPOINTS } from '@constants/clientApis';
import { ProductPathParams } from '@constants/pathParams';

// Services
import { ProductServices } from '@services/productService';

// Types
import { Product } from '@models/Product';

interface ProductProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const responseProducts = await ProductServices.getProductList(
      API_ENDPOINTS.PRODUCTS,
    );

    if (!responseProducts) {
      throw new Error(APP_ERRORS.DEFAULT_ERROR_APIS);
    }

    const paths = responseProducts.map((product: Product) => {
      return {
        params: { slug: product.id },
      };
    });

    return { paths, fallback: false };
  } catch (error) {
    if (error instanceof Error) {
      return { paths: [], fallback: true };
    }

    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ProductPathParams;

  const singleProduct = await ProductServices.getProduct(
    API_ENDPOINTS.PRODUCTS,
    slug,
  );

  return {
    props: {
      product: singleProduct,
    },
  };
};

export const ProducDetail: NextPage<ProductProps> = ({ product }) => {
  return (
    <MainLayout>
      <DetailProduct product={product} />
    </MainLayout>
  );
};

export default ProducDetail;
