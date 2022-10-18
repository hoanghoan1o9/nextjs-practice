// Constants
import { APP_IMAGE_URLS } from '@constants/images';

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={APP_IMAGE_URLS.BANNER}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'#ffffff'}
            fontWeight={700}
            lineHeight={'72px'}
            textAlign={'center'}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}
          >
            {'Make Your Interior More Minimaistic & Modern'}
          </Text>
          <Text
            color={'#ffffff'}
            fontWeight={400}
            lineHeight={'36px'}
            textAlign={'center'}
            fontSize={useBreakpointValue({ base: '2xl', md: '2xl' })}
          >
            Bringing interiors to life, understanding the person or people
            living in a home is far greater need in design.
          </Text>
          <Stack></Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};
