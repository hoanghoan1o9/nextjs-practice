// Libraries
import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Text } from '@components/common/Text';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

interface CardProps {
  href: APP_IMAGE_URLS;
  title: string;
  description: string;
}

const CardItem = ({ href, title, description }: CardProps) => {
  return (
    <Box
      w="425px"
      h="280px"
      border="1px solid #fadcd9"
      borderRadius="10px"
      shadow="4px 2px 10px 2px #f7948933"
    >
      <Box mt="20px" ml="20px">
        <Image src={href} alt={title} width={60} height={60} />
      </Box>
      <Text value={title} pl="20px" my="10px" />
      <Text value={description} w="385px" px="20px" mt="10px" mb="20px" />
      <Link href="/">
        <ChakraLink pl="20px" color="#f79489">
          more info
        </ChakraLink>
      </Link>
    </Box>
  );
};

export { CardItem };
