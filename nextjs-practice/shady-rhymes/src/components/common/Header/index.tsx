// Libraries
import { Heading } from '@chakra-ui/react';

// Components
import NavBar from '@components/common/NavBar';

// Constants
import { NAV_ITEMS } from '@constants/navigation';

export const Header = () => {
  return (
    <Heading
      as="h1"
      pos="absolute"
      left="0"
      right="0"
      py="20px"
      mx="20"
    >
      <NavBar navItems={NAV_ITEMS} />
    </Heading>
  );
};
