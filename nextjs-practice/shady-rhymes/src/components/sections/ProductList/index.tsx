// Libs
import { useState } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

// Components
import { ProductItem } from '@components/feature/ProductItem';
import { Text } from '@components/common/Text';
import { DeleteProductForm } from '@components/feature/DeleteProductForm';
import { AddProductForm } from '@components/feature/AddProductForm';

// Context
import { useProduct } from '@contexts/ProductContext';
import { Button } from '@components/common/Button';

export const ProductListSection = () => {
  const { productList } = useProduct();
  const [isOpenAddForm, setIsOpenAddForm] = useState<boolean>(false);
  const [isOpenDeleteForm, setIsOpenDeleteForm] = useState<boolean>(false);

  const handleOpenAddFormModal = () => {
    setIsOpenAddForm(!isOpenAddForm);
  };

  const handleOpenDeleteFormModal = () => {
    setIsOpenDeleteForm(!isOpenDeleteForm);
  };

  return (
    <>
      <Box my={'200px'} pos="relative">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>
            <Text
              value="Featured Product"
              fontSize={'36px'}
              lineHeight={'72px'}
              fontWeight={'500'}
            />
          </Heading>
          <Button
            mt="40px"
            variant="primary"
            label="Add"
            onClick={handleOpenAddFormModal}
          />
        </Box>
        <SimpleGrid as="ul" columns={[2, 4]} gap={6}>
          {productList?.length &&
            productList?.map(({ id, title, category, price, image }) => (
              <ProductItem
                onOpen={handleOpenDeleteFormModal}
                key={id}
                id={id}
                title={title}
                category={category}
                price={price}
                url={image.url}
              />
            ))}
        </SimpleGrid>
        <AddProductForm isOpen={isOpenAddForm} />
        <DeleteProductForm isOpen={isOpenDeleteForm} id={5} />
      </Box>
    </>
  );
};
