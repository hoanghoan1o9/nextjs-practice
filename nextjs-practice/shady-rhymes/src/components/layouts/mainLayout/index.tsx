// Libraries
import React, { memo } from 'react';
import Head from 'next/head';

// Layouts
import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayoutBase = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Shady Rhymes</title>
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};

export const MainLayout = memo(MainLayoutBase);
