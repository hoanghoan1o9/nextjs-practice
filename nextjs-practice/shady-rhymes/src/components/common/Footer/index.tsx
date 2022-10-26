// Libs
import { ReactNode } from 'react';

// Components
import Logo from '@components/common/Logo';
import { ChakraNextLink } from '@components/common/ChakraNextLink';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="medium" mb={2} color="#fadcd9">
      {children}
    </Text>
  );
};

export const Footer = () => (
  <Box
    bg="linear-gradient(275.58deg, #000000 0%, #4B4B4B 100%)"
    data-testid="TestFooter"
  >
    <Container as={Stack} maxW="6xl" py={10}>
      <SimpleGrid
        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
        spacing={8}
      >
        <Stack spacing={6}>
          <Box>
            <Logo
              alt="Footer logo"
              url={APP_IMAGE_URLS.FOOTER_LOGO}
              blurDataURL={APP_IMAGE_URLS.FOOTER_LOGO}
            />
          </Box>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Features</ListHeader>
          <ChakraNextLink href={'#'}>Our Features</ChakraNextLink>
          <ChakraNextLink href={'#'}>Pricing</ChakraNextLink>
          <ChakraNextLink href={'#'}>Affiliate Program</ChakraNextLink>
          <ChakraNextLink href={'#'}>Press Kit</ChakraNextLink>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Support</ListHeader>
          <ChakraNextLink href={'#'}>Account</ChakraNextLink>
          <ChakraNextLink href={'#'}>Help</ChakraNextLink>
          <ChakraNextLink href={'#'}>Contact Us</ChakraNextLink>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Legal</ListHeader>
          <ChakraNextLink href={'#'}>Privacy Policy</ChakraNextLink>
          <ChakraNextLink href={'#'}>Terms of Use</ChakraNextLink>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Social Media</ListHeader>
          <ChakraNextLink href={'#'}>Twitter</ChakraNextLink>
          <ChakraNextLink href={'#'}>Product Hunt</ChakraNextLink>
          <ChakraNextLink href={'#'}>Instagram</ChakraNextLink>
          <ChakraNextLink href={'#'}>Github</ChakraNextLink>
        </Stack>
      </SimpleGrid>
    </Container>
    <Box py={10}>
      <Text pt={6} fontSize="default" textAlign="center" color="#ffffff">
        Copyright 2021 ©shady rhymes
      </Text>
    </Box>
  </Box>
);
