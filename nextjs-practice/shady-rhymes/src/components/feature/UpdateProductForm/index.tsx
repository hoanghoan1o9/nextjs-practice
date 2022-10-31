// Libs
import React, { useState } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Button } from '../../common/Button';
import { useRouter } from 'next/router';

//Models
import { Product } from '@models/Product';

// Components
import Modal from '@components/common/Modal';

// Services
import { patchProduct } from '@services/productService';

// Constants
import { ROUTES } from '@constants/router';
import { API } from '@constants/clientApis';

interface Props {
  id: string;
  isOpen: boolean;
  onClose: () => {};
}

export const UpdateProductForm = ({ isOpen, id, onClose }: Props) => {
  const [input, setInput] = useState({
    title: '',
    category: '',
    price: '',
  });

  const router = useRouter();

  const handleUpdateProduct = async () => {
    try {
      const newproduct = {
        ...input,
        id,
        image: { url: '/images/brown-chair.png', alt: 'Chair' },
      };
      await patchProduct(
        API.URL.LOCAL as string,
        newproduct as unknown as Product,
      );
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
    <Modal
      title="Update product"
      body={
        <>
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
        </>
      }
      footer={
        <Button onClick={handleUpdateProduct} isDisabled={false}>
          Submit
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
