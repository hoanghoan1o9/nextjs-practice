// Libs
import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Container } from '@chakra-ui/react';
import { Button } from '../../common/Button';
import { useRouter } from 'next/router';

//Models
import { Product } from '@models/Product';

// Services
import { ProductServices } from '@services/productService';

// Constants
import { ROUTES } from '@constants/router';

interface Props {
  id: string;
  isOpen: boolean;
}

export const UpdateProductForm = ({ isOpen, id }: Props) => {
  // const { title, category, price } = product;
  const [input, setInput] = useState({
    title: '',
    category: '',
    price: '',
  });

  const router = useRouter();

  // console.log('title', title);
  // console.log('category', category);
  // console.log('price', price);
  // console.log('input', input);

  const handleUpdateProduct = async () => {
    try {
      const newproduct = {
        ...input,
        id,
        image: { url: '/images/brown-chair.png', alt: 'Chair' },
      };
      await ProductServices.patchProduct(newproduct as unknown as Product);
      setInput({ title: '', category: '', price: '' });
      router.push(ROUTES.HOME_PAGE);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValues = e.target.value;
    setInput({
      ...input,
      [e.target.name]: inputValues,
    });
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
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Enter Title"
          type="text"
          name="title"
          value={input.title}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Category</FormLabel>
        <Input
          placeholder="Enter Category"
          type="text"
          name="category"
          value={input.category}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={input.price}
          onChange={handleInputChange}
        />
      </FormControl>
      <Button label={'Submit'} mt="20px" onClick={handleUpdateProduct} />
    </Container>
  );
};
