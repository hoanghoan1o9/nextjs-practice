import { ProductListSection } from '@components/sections/productListSection';
import { MainLayout } from '@components/layouts/mainLayout';
import { Banner } from '@components/featured/Banner';
import { AboutSection } from '@components/sections/aboutSection';
import { InforSection } from '@components/sections/InfoSection';

// Types
import type { NextPage } from 'next';

// FIXME: this field use for testing UI
const Home: NextPage = () => {
  return (
    <MainLayout>
      <Banner />
      <AboutSection />
      <InforSection />
      <ProductListSection />
    </MainLayout>
  );
};

export default Home;
