// Libs
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

interface LogoProps {
  alt: string;
  placeholder?: 'blur' | 'empty' | undefined;
  url: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
}

const Logo = ({
  alt,
  layout = 'fixed',
  placeholder,
  url,
  width = 120,
  height = 35,
}: LogoProps) => (
  <Link href="/" passHref>
    <Image
      src={url}
      alt={alt}
      layout={layout}
      width={width}
      height={height}
      placeholder={placeholder}
      blurDataURL={APP_IMAGE_URLS.LOGO}
      priority
    />
  </Link>
);

export default Logo;
