// Libs
import React, { useEffect, useState, useCallback } from 'react';

// Helpers
import { debounce } from 'helpers/debounce';

// Models
import { Product } from 'models/product';

// Contexts
import { useProduct } from 'contexts/ProductContext';

// Components
import Dropdown from 'components/Dropdown';
import Input from 'components/Input';
import ProductList from 'components/ProductList';

// Constants
import { DROPDOWN } from 'constants/dropdown';

//Images
import { SearchIcon } from 'assets/index';

// Styles
import './productListPage.css';

const ProductListPage = () => {
  const { productList, getProductList } = useProduct();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductList();
  }, [products]);

  console.log('data', productList);
  const productsData = productList;

  const handleSortProduct = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const value = event.target.value;

    switch (value) {
      case DROPDOWN.VALUES.A_TO_Z:
        setProducts(productsData.sort((a, b) => (a.title > b.title ? 1 : -1)));
        break;

      case DROPDOWN.VALUES.Z_TO_A:
        setProducts(productsData.sort((a, b) => (a.title > b.title ? -1 : 1)));
        break;

      case DROPDOWN.VALUES.HIGHTEST_TO_LOWEST:
        setProducts(productsData.sort((a, b) => (a.price > b.price ? -1 : 1)));
        break;

      case DROPDOWN.VALUES.LOWEST_TO_HIGHEST:
        setProducts(productsData.sort((a, b) => (a.price < b.price ? -1 : 1)));
    }
  };

  const handleSearchProduct = (event: React.KeyboardEvent): void => {
    const target = event.target as HTMLInputElement;

    let value = target.value.toUpperCase();

    if (!value) {
      setProducts(productsData);
    }

    setProducts(
      productsData.filter((product) =>
        product.title.toUpperCase().includes(value),
      ),
    );
  };

  return (
    <section className="product-list-page">
      <div>
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
      <ProductList productList={products} />
      {/* <Pagination /> */}
    </section>
  );
};

export default ProductListPage;
