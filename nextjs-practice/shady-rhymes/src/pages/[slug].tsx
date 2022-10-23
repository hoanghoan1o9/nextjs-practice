// Libraries
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

// Components
import { DetailProduct } from '@components/sections/detailProduct';
// Layouts
import { MainLayout } from '@components/layouts/mainLayout';

// Constants
import { API_ENDPOINTS } from '@constants/clientApis';
import { ProductPathParams } from '@constants/pathParams';

// Services
import { ProductServices } from '@services/productService';

// Types
import { Product } from '@models/Product';
import axios from 'axios';

interface ProductProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const responseProducts = await axios
      .get(API_ENDPOINTS.PRODUCTS)
      .then(({ data }) => data.data);

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

  const product = await ProductServices.getProduct(
    API_ENDPOINTS.PRODUCTS,
    slug,
  );

  return {
    props: {
      product: product,
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
