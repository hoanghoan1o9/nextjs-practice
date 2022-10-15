import { Seo } from '@components/common/Seo';
import type { NextPage } from 'next';

// FIXME: this field use for testing UI
const Home: NextPage = () => {
  return (
    <Seo
      props={{
        title: 'NextJS | Shady Rhymes',
        description: 'Shady Rhymes interiors design landing page',
        url: 'https://metatags.io/',
        thumbnailUrl:
          'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
      }}
    />
  );
};

export default Home;
