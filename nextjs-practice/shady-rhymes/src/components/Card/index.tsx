// Libraries
import { Box, useStyleConfig } from '@chakra-ui/react';
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

function Wrapper(props: any) {
  const { variant, size, baseStyle, ...rest } = props;

  const styles = useStyleConfig('Card', { variant, size, baseStyle });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
}

const CardItem = ({ href, title, description }: CardProps) => {
  return (
    <Wrapper variant="solid" size="lg">
      <Box mt="20px" ml="20px">
        <Image src={href} alt={title} width={60} height={60} />
      </Box>
      <Text value={title} pl="20px" my="10px" />
      <Text value={description} w="385px" px="20px" mt="10px" mb="20px" />
      <ChakraNextLink pl="20px" variant="normalLink" href="/">
        more info
      </ChakraNextLink>
    </Wrapper>
  );
};

export { CardItem };
