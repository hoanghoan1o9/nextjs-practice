// Libs
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

// Models
import { Product } from 'models/product';
import { Cart } from '../../models/cart';

// Components
import ProductInfo from 'pages/ProductDetailPage/ProductInfo';
import NotFoundPage from 'pages/NotFoundPage';

interface Props {
  productList: Product[];
  cartList: Cart[];
}

const ProductDetailPage = ({ productList, cartList }: Props): JSX.Element => {
  const params = useParams<{ productId: string }>();

  if (productList) {
    const product = productList.find(
      (product) => product.id === params.productId,
    );
    if (product) {
      const cart = cartList.find((cart) => cart.id === product?.id);
      let isAddedToCart = !!cart?.isAddedToCart;

      return (
        <ProductInfo
          product={product}
          isAddedToCart={isAddedToCart}
          cart={cart}
        />
      );
    }
  }

  return <NotFoundPage />;
};

export default ProductDetailPage;
