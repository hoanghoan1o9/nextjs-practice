// Libraries
import { Heading } from '@chakra-ui/react';

// Components
import NavBar from '@components/common/NavBar';

// Constants
import { NAV_ITEMS } from '@constants/navigation';

export const Header = () => {
  return (
    <Heading className="container" py="20px" mx="20">
      <NavBar navItems={NAV_ITEMS} />
    </Heading>
  );
};
