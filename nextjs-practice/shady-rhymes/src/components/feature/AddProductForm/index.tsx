// Libs
import React, { useState } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

// Models
import { Product } from '@models/Product';

// Components
import { Button } from '../../common/Button';
import Modal from '@components/common/Modal';
// import { LoadingIndicator } from '@components/common/LoadingIndicator';

// Services
import { addProduct } from '@services/productService';

// Constants
import { API } from '@constants/clientApis';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductForm = ({ isOpen, onClose }: Props) => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState({});

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        ...input,
        image: { url: '/images/brown-chair.png', alt: 'Chair' },
      };

      await addProduct(
        API.URL.LOCAL as string,
        newProduct as unknown as Product,
      );
      setInput({ title: '', category: '', price: 0 });
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
      title="Add new product"
      body={
        <>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              type="text"
              data-id="Title"
              placeholder="Chair"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired mt={2}>
            <FormLabel>Category</FormLabel>
            <Input
              name="category"
              type="text"
              data-id="Category"
              placeholder="Furniture"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isRequired mt={2}>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              type="number"
              data-id="Price"
              placeholder="1000"
              onChange={handleInputChange}
            />
          </FormControl>
        </>
      }
      footer={
        <Button onClick={handleAddProduct} isDisabled={false}>
          Submit
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
