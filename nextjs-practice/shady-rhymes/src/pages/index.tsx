import { ProductItem } from '@components/featured/ProductItem';
import { APP_IMAGE_URLS } from '@constants/images';
import type { NextPage } from 'next';

// FIXME: this field use for testing UI
const Home: NextPage = () => {
  return (
    <ProductItem
      title={'Product'}
      url={APP_IMAGE_URLS.BROWN_CHAIR}
      category={'Category'}
      price={795.0}
    />
  );
};

export default Home;
