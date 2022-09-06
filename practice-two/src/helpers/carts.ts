//Libs
import React, { useMemo } from 'react';

// Models
import { Cart } from 'models/cart';
import { Product } from '../models/product';

const generateCartList = (cartList: Cart[], products: Product[]) => {
  let carts: Cart[] = [];
  cartList.map((cart: Cart) => {
    const product: Product | undefined = products.find(
      (product: Product) => product.id === cart.id,
    );
    if (product)
      carts = [
        ...carts,
        Object.assign(
          cart,
          {},
          {
            price: product.price,
            title: product.title,
            colors: product.colors,
            src: product.src,
          },
        ),
      ];
  });

  const totalPriceCart = useMemo(
    () => carts.reduce((x, y) => x + y.price * y.quantity, 0),
    [carts],
  );

  return {
    carts,
    totalPriceCart,
  };
};

export { generateCartList };
