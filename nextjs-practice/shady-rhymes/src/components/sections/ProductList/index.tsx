// Libs
import { useState } from 'react';
import { Box, Heading, List } from '@chakra-ui/react';

// Components
import { ProductItem } from '@components/feature/ProductItem';
import { AddProductForm } from '@components/feature/AddProductForm';
// import { DeleteProductForm } from '@components/featured/DeleteProductForm';

// Context
import { useProduct } from '@contexts/ProductContext';

export const ProductListSection = () => {
  const { productList } = useProduct();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenFormModal = () => {
    setIsOpen(!isOpen);
    console.log('run');
  };

  return (
    <>
      <Box my={'200px'} pos="relative">
        <Heading
          fontSize={'36px'}
          lineHeight={'72px'}
          fontWeight={'500'}
          mb={'40px'}
          textAlign={'center'}
        >
          Featured Product
        </Heading>
        <List
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          m="0 80px"
        >
          {productList?.length &&
            productList?.map(({ id, title, category, price, image }) => (
              <ProductItem
                onOpen={handleOpenFormModal}
                key={id}
                id={id}
                title={title}
                category={category}
                price={price}
                url={image.url}
              />
            ))}
        </List>
      </Box>
      <AddProductForm isOpen={isOpen} />
    </>
  );
};
