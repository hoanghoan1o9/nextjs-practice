// Libs
import { Box, Heading, Text, Stack, Flex, GridItem } from '@chakra-ui/react';
import { Button } from '@components/common/Button';
import Logo from '@components/common/Logo';

// Components
import { useRouter } from 'next/router';

interface ProductItemProps {
  id: string;
  title: string;
  url: string;
  category: string;
  price: number;
  onOpen: () => void;
}

export const ProductItem = ({
  id,
  title,
  url,
  category = 'Category',
  price,
  onOpen,
}: ProductItemProps) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/${id}`);
  };

  return (
    <>
      <GridItem
        as="li"
        w={'full'}
        boxShadow={'2xl'}
        overflow={'hidden'}
        cursor="pointer"
        mt="30px"
      >
        <Box pos="relative">
          <Box pos={'relative'} onClick={handleClick}>
            <Logo
              layout={'responsive'}
              width={425}
              height={400}
              alt={'Brown chair'}
              url={url}
              blurDataURL={url}
            />
          </Box>
          <Flex alignItems="center">
            <Stack ml={'20px'} pb="20px" flex="1">
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
            <Button
              pos="absolute"
              top="0"
              right="0"
              variant="close"
              size="close"
              label="X"
              onClick={onOpen}
            />
          </Flex>
        </Box>
      </GridItem>
    </>
  );
};
