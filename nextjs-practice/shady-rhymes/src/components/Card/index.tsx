// Libraries
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

// Components
import { Text } from '@components/common/Text';
import { ChakraNextLink } from '@components/common/ChakraNextLink';

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
      border="1px solid var(--chakra-borders-mainBorder)"
      borderRadius="10px"
      shadow="4px 2px 10px 2px var(--chakra-shadows-mainShadow)"
    >
      <Box mt="20px" ml="20px">
        <Image src={href} alt={title} width={60} height={60} />
      </Box>
      <Text value={title} pl="20px" my="10px" />
      <Text value={description} w="385px" px="20px" mt="10px" mb="20px" />
      <ChakraNextLink pl="20px" variant="normalLink" href="/">
        more info
      </ChakraNextLink>
    </Box>
  );
};

export { CardItem };
