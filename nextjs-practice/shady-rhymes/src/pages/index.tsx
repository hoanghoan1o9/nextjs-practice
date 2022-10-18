import { CardItem } from '@components/Card';
import type { NextPage } from 'next';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

const Home: NextPage = () => {
  return (
    <CardItem
      href={APP_IMAGE_URLS.CHECK_ICON}
      title="Professionalism"
      description="We deliver the final work with great professional way."
    />
  );
};

export default Home;
