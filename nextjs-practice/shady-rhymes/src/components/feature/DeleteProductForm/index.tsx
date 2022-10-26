// Libs
import { FormControl, FormLabel, Container } from '@chakra-ui/react';
import { Button } from '../../common/Button';

import { ProductServices } from '@services/productService';

interface Props {
  isOpen: boolean;
  id: number;
}

export const DeleteProductForm = ({ isOpen, id }: Props) => {
  const handleDeleteProduct = async () => {
    await ProductServices.deleteProduct(id);
  };

  return (
    <Container
      maxW={'20em'}
      display={isOpen ? 'flex' : 'none'}
      flexDirection="column"
      alignItems="center"
      border="1px solid #000"
      p="10px"
      borderRadius="10px"
      mb="100px"
      // pos="absolute"
    >
      <FormControl>
        <FormLabel>Delete Product</FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel>Do you want to delete this product</FormLabel>
      </FormControl>

      <Button label={'Delete'} mt="20px" onClick={handleDeleteProduct} />
    </Container>
  );
};
