import * as React from 'react';

// Models
import { LayoutProps } from '@models/common';
import Head from 'next/head';

export default function LoginLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Shady Rhymes</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
