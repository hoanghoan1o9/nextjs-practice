// Libraries
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// Components
import { DetailProduct } from '@components/sections/ProductDetail';
import { LoadingIndicator } from '@components/common/LoadingIndicator';

// Models
import { NextPageWithLayout } from '@models/common';

// Layouts
import { MainLayout } from '@components/layouts/Main';

// Constants
import { API_ENDPOINTS } from '@constants/clientApis';
import { ProductPathParams } from '@constants/pathParams';

// Services
import { ProductServices } from '@services/productService';

// Types
import { Product } from '@models/Product';
// import { UpdateProductForm } from '@components/feature/UpdateProductForm';
// import axios from 'axios';

interface ProductProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const responseProducts = await ProductServices.getProductList(
    API_ENDPOINTS.PRODUCTS,
  );

  const paths = responseProducts.map((product: Product) => {
    return {
      params: { slug: product.id },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ProductPathParams;

  const product = await ProductServices.getProduct(
    API_ENDPOINTS.PRODUCTS,
    slug,
  );

  if (!product) return { notFound: true };

  return {
    props: {
      product: product,
    },
    revalidate: 5,
  };
};

export const ProductDetail: NextPageWithLayout<ProductProps> = ({
  product,
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <DetailProduct product={product} />
      {/* <UpdateProductForm id={product.id} isOpen={true} /> */}
    </>
  );
};

ProductDetail.Layout = MainLayout;

export default ProductDetail;
