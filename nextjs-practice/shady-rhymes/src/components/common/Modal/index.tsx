import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  body: ReactNode;
  footer: ReactNode;
  size?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | (string & {})
    | 'xs'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | 'full';
}

const Modal = ({
    onClose = () => {},
  size = 'sm',
  isOpen,
  title = '',
  body,
  footer,
}: ModalProps) => {
  return (
    <ChakraModal onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
