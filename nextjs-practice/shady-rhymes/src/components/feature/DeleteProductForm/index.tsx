// Libs
import { FormControl, FormLabel, Container, Flex } from '@chakra-ui/react';
import { Button } from '../../common/Button';

// Services
import { deleteProduct } from '@services/productService';

interface Props {
  isOpen: boolean;
  id: number;
}

export const DeleteProductForm = ({ isOpen, id }: Props) => {
  const handleDeleteProduct = async () => {
    await deleteProduct(id);
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
      pos="fixed"
      top="100px"
      left="0"
      right="0"
      backgroundColor="whiteText.100"
    >
      <FormControl>
        <FormLabel fontSize="default">Delete Product</FormLabel>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="small">
          Do you want to delete this product
        </FormLabel>
      </FormControl>
      <Flex justifyContent="space-between">
        <Button label={'Delete'} onClick={handleDeleteProduct} />
      </Flex>
    </Container>
  );
};
