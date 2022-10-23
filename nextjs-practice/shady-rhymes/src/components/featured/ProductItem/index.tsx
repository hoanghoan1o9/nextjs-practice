// Libs
import { useState } from 'react';
import { Box, Heading, Text, Stack, ListItem, Flex } from '@chakra-ui/react';
import { Button } from '@components/common/Button';
import Logo from '@components/common/Logo';
import { Modal } from '@components/common/Modal';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState<string>('');
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/${id}`);
  };

  const handleOpenDeleteModal = () => {
    setIsOpen(!isOpen);
    setTitleModal('Delete Product');
  };

  const handleOpenEditodal = () => {
    setIsOpen(!isOpen);
    setTitleModal('Update product');
  };

  return (
    <>
      <ListItem
        maxW={'425px'}
        maxH={'600px'}
        w={'full'}
        height={'full'}
        boxShadow={'2xl'}
        overflow={'hidden'}
        cursor="poiter"
      >
        <Box>
          <Box h={'425px'} pos={'relative'} onClick={handleClick}>
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
            <Flex mr="10px" direction="column">
              <Button label="Update" mb="10px" onClick={handleOpenEditodal} />
              <Button label="Delete" onClick={handleOpenDeleteModal} />
            </Flex>
          </Flex>
        </Box>
      </ListItem>
      <Modal title={titleModal} isOpen={isOpen} />
    </>
  );
};
