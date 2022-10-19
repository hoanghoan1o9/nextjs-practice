// Libraries
import React from 'react';
import Link, { LinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps;

export const ChakraNextLink = React.forwardRef(
  ({ href, children, ...props }: ChakraLinkAndNextProps, ref: any) => {
    return (
      <Link href={href} passHref>
        <ChakraLink ref={ref} {...props}>
          {children}
        </ChakraLink>
      </Link>
    );
  },
);
