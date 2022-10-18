// Libs
import React, { KeyboardEvent, ChangeEvent } from 'react';
import {
  Box,
  Icon,
  Text,
  InputGroup,
  InputProps,
  InputRightElement,
  Input as InputChakra,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface FormInputProps extends InputProps {
  className?: string;
  placeholder: string;
  defaultValue?: string;
  rightContent?: string;
  message?: string;
  variant?: 'withAddon';
  size?: 'withAddon';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  isDisabled = false,
  isRequired = true,
  className = '',
  isReadOnly = false,
  placeholder,
  autoFocus = true,
  message,
  ...props
}: FormInputProps) => {
  return (
    <Box pos="relative" h="100vh">
      <Text variant={'danger'} ml={"20px"}>{message}</Text>
      <InputGroup>
        <InputChakra
          isDisabled={isDisabled}
          isRequired={isRequired}
          className={className}
          isReadOnly={isReadOnly}
          autoFocus={autoFocus}
          variant="withAddon"
          placeholder={placeholder}
          {...props}
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
