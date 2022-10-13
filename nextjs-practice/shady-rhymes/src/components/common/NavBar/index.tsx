// Libraries
import { Stack, Popover, PopoverTrigger, Link, Flex } from '@chakra-ui/react';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

// Component
import Logo from '../Logo';

export interface NavItem {
  label: string;
  href?: string;
}

interface NavBarProps {
  navItems: NavItem[];
}

const NavBarBase = ({ navItems = [] }: NavBarProps) => {
  return (
    <Flex
      data-testid="testNavbar"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo url={APP_IMAGE_URLS.LOGO} alt="main-logo" />
      <Stack direction={'row'} spacing={4}>
        {navItems.map((navItem) => (
          <Flex key={navItem.label}>
            <Popover trigger={'hover'}>
              <PopoverTrigger>
                <Link href={navItem.href ?? '/'} size="navBar" variant="navBar">
                  {navItem.label}
                </Link>
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
      />
    </Flex>
  );
};

export default NavBarBase;
