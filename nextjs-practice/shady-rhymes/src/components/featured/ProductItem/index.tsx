// Libs
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import Logo from '@components/common/Logo';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

interface ProductItemProps {
  title: string;
  url: APP_IMAGE_URLS;
  category: string;
  price: number;
}

export const ProductItem = ({
  title,
  url = APP_IMAGE_URLS.BROWN_CHAIR,
  category = 'Category',
  price,
}: ProductItemProps) => {
  return (
    <Box
      maxW={'425px'}
      maxH={'600px'}
      w={'full'}
      height={'full'}
      boxShadow={'2xl'}
      // rounded={'md'}
      overflow={'hidden'}
    >
      <Box h={'425px'} pos={'relative'}>
        <Logo
          layout={'responsive'}
          width={425}
          height={400}
          alt={'Brown chair'}
          url={url}
          blurDataURL={url}
        />
      </Box>
      <Stack ml={'20px'}>
        <Heading
          color={'#564e4e'}
          fontSize={'default'}
          lineHeight={'36px'}
          fontWeight={'400'}
          mt={'20px'}
        >
          {title}
        </Heading>
        <Text
          color={'#c4c4c4'}
          mt={'10px'}
          fontSize={'small'}
          fontWeight={'400'}
          lineHeight={'28px'}
        >
          {category}
        </Text>
        <Text
          color={'#564e4e'}
          mt={'20px'}
          mb={'20px'}
          fontSize={'small'}
          fontWeight={'400'}
          lineHeight={'28px'}
        >
          IDR {price}.000
        </Text>
      </Stack>
    </Box>
  );
};
