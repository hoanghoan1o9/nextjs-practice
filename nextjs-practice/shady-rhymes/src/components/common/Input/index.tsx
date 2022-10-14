// Libs
import {
  Box,
  Icon,
  InputGroup,
  InputProps,
  InputRightElement,
  Input as InputChakra,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface FormInputProps extends InputProps {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  rightContent?: string;
  variant?: 'withAddon';
  size?: 'withAddon';
}

export const Input = ({
  isDisabled = false,
  isRequired = true,
  className = '',
  isReadOnly = false,
  autoFocus = true,
}: FormInputProps) => {
  return (
    <Box pos="relative" h="100vh">
      <InputGroup>
        <InputChakra
          isDisabled={isDisabled}
          isRequired={isRequired}
          className={className}
          isReadOnly={isReadOnly}
          autoFocus={autoFocus}
          variant="withAddon"
          placeholder="Search furniture"
        />
        <InputRightElement
          pos="absolute"
          top="5"
          right="10"
          p="2"
          pointerEvents="none"
        >
          <Icon as={FaSearch} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
