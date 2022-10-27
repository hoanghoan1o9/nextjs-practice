// Libraries
import { Box, useMultiStyleConfig, GridItem } from '@chakra-ui/react';
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
  const styles = useMultiStyleConfig('List');

  return (
    <GridItem as="li" __css={styles.item} w={{ sm: 'full', md: '300px' }}>
      <Box mt="20px" ml="20px">
        <Image src={href} alt={title} width={60} height={60} />
      </Box>
      <Text value={title} pl="20px" my="10px" />
      <Text value={description} px="20px" mt="10px" mb="20px" />
      <ChakraNextLink pl="20px" mb="20px" variant="normalLink" href="/">
        more info
      </ChakraNextLink>
    </GridItem>
  );
};

export { CardItem };
