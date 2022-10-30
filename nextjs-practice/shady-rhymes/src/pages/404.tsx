// Libraries
import { Box, Flex } from '@chakra-ui/react';

// Components
import { Text } from '@components/common/Text';
import { ChakraNextLink } from '@components/common/ChakraNextLink';

// Constants
import { APP_ERRORS } from '@constants/errors';
import { APP_MESSAGES } from '@constants/messages';

const Custom404Page = () => (
  <Box
    minH="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px="10px"
  >
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Text value={APP_ERRORS.NOT_FOUND_PAGE} variant="error" size="medium" />
      <ChakraNextLink href="/" variant="notFoundLink">
        {APP_MESSAGES.BACK_TO_HOME}
      </ChakraNextLink>
    </Flex>
  </Box>
);

export default Custom404Page;
