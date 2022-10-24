// Libraries
import React from 'react';
import { Stack, Popover, PopoverTrigger, Flex } from '@chakra-ui/react';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';
import { ROUTES } from '@constants/router';

// Component
import Logo from '../Logo';
import { ChakraNextLink } from '@components/common/ChakraNextLink';

export interface NavItemProps {
  label: string;
  href?: string;
}

interface NavBarProps {
  navItems: NavItemProps[];
}

const NavBarBase = ({ navItems = [] }: NavBarProps) => {
  return (
    <Flex
      as="nav"
      data-testid="testNavbar"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo
        url={APP_IMAGE_URLS.LOGO}
        alt="main-logo"
        blurDataURL={APP_IMAGE_URLS.LOGO}
      />
      <Stack
        direction={'row'}
        spacing={4}
        display={{ base: 'none', lg: 'flex' }}
      >
        {navItems.map((navItem) => (
          <Flex key={navItem.label}>
            <Popover trigger={'hover'}>
              <PopoverTrigger>
                <ChakraNextLink
                  href={navItem.href ?? ROUTES.HOME_PAGE}
                  size="navBar"
                  variant="navBar"
                  ml="10"
                >
                  {navItem.label}
                </ChakraNextLink>
              </PopoverTrigger>
            </Popover>
          </Flex>
        ))}
      </Stack>
      <Logo
        url={APP_IMAGE_URLS.BAG_ICON}
        height={24}
        width={24}
        alt="bag-icon"
        blurDataURL={APP_IMAGE_URLS.BAG_ICON}
      />
    </Flex>
  );
};

export default NavBarBase;
