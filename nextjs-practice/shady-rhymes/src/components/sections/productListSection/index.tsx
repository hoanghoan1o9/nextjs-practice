// Libs
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

// Components
import { ProductItem } from '@components/featured/ProductItem';

// Constants
import { Products } from '@constants/productsMockData';

export const ProductListSection = () => {
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
      <Flex flexWrap={'wrap'} justifyContent={'space-between'} m={'0 80px'}>
        {Products.map(({ id, title, category, price, image }) => (
          <ProductItem
            key={id}
            title={title}
            category={category}
            price={price}
            url={image.url}
          />
        ))}
      </Flex>
    </Box>
  );
};
