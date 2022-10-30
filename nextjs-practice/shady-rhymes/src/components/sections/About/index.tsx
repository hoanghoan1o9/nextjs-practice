// Libs
import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

// Components
import { CardItem } from '@components/feature/Card';

// Constants
import { ABOUT_ITEM } from '@constants/about';

export const AboutSection = () => {
  return (
    <Box mt={{ base: '40px', md: '80px' }} mx={{ base: '0', md: '80px' }}>
      <Heading
        display={{ base: 'none', md: 'block' }}
        fontSize="36px"
        lineHeight="72px"
        fontWeight="500"
        mb=" 16px"
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
