// Libraries
import React, { memo } from 'react';
import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react';

interface LoadingIndicatorProps extends SpinnerProps {
  className?: string;
}

const LoadingIndicatorBase = ({
  size = 'xl',
  ...props
}: LoadingIndicatorProps) => {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
    >
      <Spinner size={size} data-testid="testLoader" {...props} />
    </Flex>
  );
};

export const LoadingIndicator = memo(LoadingIndicatorBase);
