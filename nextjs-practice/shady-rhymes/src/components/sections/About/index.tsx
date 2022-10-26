// Libs
import React from 'react';
import { Box, Heading, List } from '@chakra-ui/react';

// Components
import { CardItem } from '@components/feature/Card';

// Constants
import { ABOUT_ITEM } from '@constants/about';

export const AboutSection = () => {
  return (
    <Box mt={'80px'}>
      <Heading
        fontSize={'36px'}
        lineHeight={'72px'}
        fontWeight={'500'}
        m={'0 0 16px 80px'}
      >
        Why Choosing Us
      </Heading>
      <List
        display="flex"
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        m={'0 80px'}
      >
        {ABOUT_ITEM.map((item) => (
          <CardItem
            key={item.title}
            title={item.title}
            href={item.href}
            description={item.description}
          />
        ))}
      </List>
    </Box>
  );
};
