// Libs
import { Box, Heading, Text, Stack, ListItem } from '@chakra-ui/react';
import Logo from '@components/common/Logo';
import { useRouter } from 'next/router';

interface ProductItemProps {
  id: string;
  title: string;
  url: string;
  category: string;
  price: number;
}

export const ProductItem = ({
  id,
  title,
  url,
  category = 'Category',
  price,
}: ProductItemProps) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/${id}`);
  };

  return (
    <ListItem
      maxW={'425px'}
      maxH={'600px'}
      w={'full'}
      height={'full'}
      boxShadow={'2xl'}
      overflow={'hidden'}
      onClick={handleClick}
    >
      <Box>
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
    </ListItem>
  );
};
