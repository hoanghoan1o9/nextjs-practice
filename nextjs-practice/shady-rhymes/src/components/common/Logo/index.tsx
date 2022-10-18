// Libs
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  <Link href="/" passHref>
    <Image
      src={url}
      alt={alt}
      layout={layout}
      width={width}
      height={height}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      priority
    />
  </Link>
);

export default Logo;
