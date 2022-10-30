// Libraries
import Head from 'next/head';

// Models
import { LayoutProps } from '@models/common';

// Layouts
import { Header } from '@components/common/Header';
import { Footer } from '@components/common/Footer';

export const MainLayout = ({ children }: LayoutProps) => {
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
