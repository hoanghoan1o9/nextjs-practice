// Libs
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
} from '@chakra-ui/react';
import { Button } from '../../common/Button';

// Models
import { Product } from '@models/Product';

// Components
// import { LoadingIndicator } from '@components/common/LoadingIndicator';

// Services
import { addProduct } from '@services/productService';

interface Props {
  isOpen: boolean;
}

export const AddProductForm = ({ isOpen }: Props) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState({
    title: '',
    category: '',
    price: 0,
  });

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        ...input,
        image: { url: '/images/brown-chair.png', alt: 'Chair' },
      };
      await addProduct(newProduct as unknown as Product);
      setInput({ title: '', category: '', price: 0 });
      // setIsOpen(!isOpen);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseAddForm = async () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValues = e.target.value;
    setInput({
      ...input,
      [e.target.name]: inputValues,
    });
  };

  const { title, category, price } = input;

  return (
    <Container
      maxW={'20em'}
      maxH={'358px'}
      display={isOpen ? 'flex' : 'none'}
      flexDirection="column"
      alignItems="center"
      border="1px solid #000"
      p="10px"
      borderRadius="10px"
      pos="fixed"
      top="100px"
      left="0"
      right="0"
      backgroundColor="whiteText.100"
    >
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Enter Title"
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Category</FormLabel>
        <Input
          placeholder="Enter Category"
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </FormControl>
      <Box w="100%" display="flex" justifyContent="space-between">
        <Button mt="20px" onClick={handleAddProduct}>
          {/* {isLoading ? <LoadingIndicator /> : 'Submit'} */}
          Submit
        </Button>
        <Button label={'Cancel'} mt="20px" onClick={handleCloseAddForm} />
      </Box>
    </Container>
  );
};
