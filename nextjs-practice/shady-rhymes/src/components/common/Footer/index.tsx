// Libs
import { ReactNode } from 'react';

// Components
import Logo from '@components/common/Logo';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="medium" mb={2} color="#fadcd9">
      {children}
    </Text>
  );
};

export const Footer = () => (
  <Box bg="linear-gradient(275.58deg, #000000 0%, #4B4B4B 100%)">
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
          <Link href={'#'}>Our Features</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Affiliate Program</Link>
          <Link href={'#'}>Press Kit</Link>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Support</ListHeader>
          <Link href={'#'}>Account</Link>
          <Link href={'#'}>Help</Link>
          <Link href={'#'}>Contact Us</Link>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Legal</ListHeader>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Use</Link>
        </Stack>
        <Stack align={'flex-start'} color="#ffffff">
          <ListHeader>Social Media</ListHeader>
          <Link href={'#'}>Twitter</Link>
          <Link href={'#'}>Product Hunt</Link>
          <Link href={'#'}>Instagram</Link>
          <Link href={'#'}>Github</Link>
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
