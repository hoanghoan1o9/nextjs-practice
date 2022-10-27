// Libs
import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

// Components
import { CardItem } from '@components/feature/Card';

// Constants
import { ABOUT_ITEM } from '@constants/about';

export const AboutSection = () => {
  return (
    <Box mt={'80px'}>
      <Heading
        display={{ base: 'none', md: 'block' }}
        fontSize="36px"
        lineHeight="72px"
        fontWeight="500"
        m="0 0 16px 80px"
      >
        Why Choosing Us
      </Heading>
      <SimpleGrid
        as="ul"
        columns={[2, 4]}
        gap={6}
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
      </SimpleGrid>
    </Box>
  );
};
