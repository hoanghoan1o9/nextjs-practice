// Libraries
import { Stack, Popover, PopoverTrigger, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

// Component
import Logo from '../Logo';

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
      data-testid="testNavbar"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo
        url={APP_IMAGE_URLS.LOGO}
        alt="main-logo"
        blurDataURL={APP_IMAGE_URLS.LOGO}
      />
      <Stack direction={'row'} spacing={4}>
        {navItems.map((navItem) => (
          <Flex key={navItem.label}>
            <Popover trigger={'hover'}>
              <PopoverTrigger>
                <NextLink href={navItem.href ?? '/'}>
                  <Link size="navBar" variant="navBar" ml="10">
                    {navItem.label}
                  </Link>
                </NextLink>
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
