// Libs
import { FormControl, FormLabel } from '@chakra-ui/react';

// Components
import { Button } from '../../common/Button';
import Modal from '@components/common/Modal';

// Services
import { deleteProduct } from '@services/productService';

// Constants
import { API } from '@constants/clientApis';

interface Props {
  isOpen: boolean;
  id: string;
  onClose: () => void;
}

export const DeleteProductForm = ({ isOpen, id, onClose }: Props) => {
  const handleDeleteProduct = async () => {
    await deleteProduct(API.URL.LOCAL as string, id);
  };

  return (
    <Modal
      title="Delete product"
      body={
        <>
          <FormControl>
            <FormLabel fontSize="small">
              Do you want to delete this product
            </FormLabel>
          </FormControl>
        </>
      }
      footer={
        <Button onClick={handleDeleteProduct} isDisabled={false}>
          Delete
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
