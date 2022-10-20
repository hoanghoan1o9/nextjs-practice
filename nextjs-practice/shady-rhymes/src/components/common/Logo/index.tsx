// Libs
import React from 'react';
import Image from 'next/image';

// Component
// import { ChakraNextLink } from '@components/common/ChakraNextLink';

interface LogoProps {
  alt: string;
  placeholder?: 'blur' | 'empty' | undefined;
  url: string;
  blurDataURL: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
}

const Logo = ({
  alt,
  layout = 'fixed',
  placeholder,
  url,
  blurDataURL,
  width = 120,
  height = 35,
}: LogoProps) => (
  <Image
    src={url}
    alt={alt}
    layout={layout}
    width={width}
    height={height}
    placeholder={placeholder}
    blurDataURL={blurDataURL}
  />
);

export default Logo;
