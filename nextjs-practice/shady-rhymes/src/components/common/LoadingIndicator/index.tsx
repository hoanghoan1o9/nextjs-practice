// Libraries
import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react';

interface LoadingIndicatorProps extends SpinnerProps {
  className?: string;
}

export const LoadingIndicator = ({
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
