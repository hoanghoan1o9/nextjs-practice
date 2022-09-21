// Libs
import React, { useEffect, useState, useCallback } from 'react';

// Helpers
import { debounce } from 'helpers/debounce';

// Models
import { Product } from 'models/product';

// Components
import { Dropdown } from 'components/Dropdown';
import { Input } from 'components/Input';
import { ProductList } from 'components/ProductList';

// Constants
import { DROPDOWN } from 'constants/dropdown';
import { PRODUCT } from 'constants/product';

//Images
import { SearchIcon } from 'assets/index';

// Styles
import './productListPage.css';

interface Props {
  productList: Product[];
}

const ProductListPage = ({ productList }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  const handleSetProducts = (newProducts: Product[]) => {
    setProducts([...newProducts]);
  };

  const handleSortProduct = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const value = event.target.value;

      switch (value) {
        case DROPDOWN.VALUES.A_TO_Z:
          handleSetProducts(
            products.sort((a, b) => (a.title > b.title ? 1 : -1)),
          );
          break;

        case DROPDOWN.VALUES.Z_TO_A:
          handleSetProducts(
            products.sort((a, b) => (a.title > b.title ? -1 : 1)),
          );
          break;

        case DROPDOWN.VALUES.HIGHTEST_TO_LOWEST:
          handleSetProducts(
            products.sort((a, b) => (a.price > b.price ? -1 : 1)),
          );
          break;

        case DROPDOWN.VALUES.LOWEST_TO_HIGHEST:
          handleSetProducts(
            products.sort((a, b) => (a.price < b.price ? -1 : 1)),
          );
          break;
      }
    },
    [products],
  );

  const handleSearchProduct = useCallback(
    (event: React.KeyboardEvent): void => {
      const target = event.target as HTMLInputElement;

      let value = target.value.toUpperCase();

      if (!value) {
        return setProducts(productList);
      }

      setProducts(
        productList.filter((product) =>
          product.title.toUpperCase().includes(value),
        ),
      );
    },
    [productList],
  );

  return (
    <section className="product-list-page">
      <div className="product-list-page__search">
        <h2 className="product-list-page__title">Shop The Latest</h2>
        <div className="product-list-page__input">
          <Input
            placeholder="Search..."
            type="text"
            onKeyUp={debounce(handleSearchProduct, 300)}
          />
          <img
            className="product-list-page__icon"
            src={SearchIcon}
            alt="SearchIcon"
          />
        </div>
        <Dropdown options={DROPDOWN.OPTION_DATA} onChange={handleSortProduct} />
      </div>
      <ProductList
        productList={products}
        style={PRODUCT.STYLES.HIDE}
        size={PRODUCT.SIZES_IMAGE.MEDIUM}
      />
    </section>
  );
};

export default ProductListPage;
