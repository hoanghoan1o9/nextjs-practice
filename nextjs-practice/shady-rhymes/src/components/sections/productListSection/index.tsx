// Libs
import React from 'react';
import { Box, Heading, List, ListItem } from '@chakra-ui/react';

// Components
import { ProductItem } from '@components/featured/ProductItem';

// Context
import { useProduct } from '@contexts/ProductContext';

export const ProductListSection = () => {
  const { productList } = useProduct();

  return (
    <Box my={'200px'}>
      <Heading
        fontSize={'36px'}
        lineHeight={'72px'}
        fontWeight={'500'}
        mb={'40px'}
        textAlign={'center'}
      >
        Featured Product
      </Heading>
      <List
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        m="0 80px"
      >
        {productList?.length &&
          productList?.map(({ id, title, category, price, image }) => (
            <ListItem key={id}>
              <ProductItem
                id={id}
                title={title}
                category={category}
                price={price}
                url={image.url}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
