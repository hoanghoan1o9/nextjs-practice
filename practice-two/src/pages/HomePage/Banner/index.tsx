//libs
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import BannerInfo from './BannerInfo';
import { Button } from 'components/Button';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import './banner.css';

const Banner = (): JSX.Element => {
  const navigate = useNavigate();

  const navigateProductsPage = () => {
    navigate('products', { replace: true });
  };

  return (
    <section className="banner">
      <BannerInfo title="Gold big hoops" price={68} />
      <div className="banner__button">
        <Button
          type="button"
          size={BUTTON.SIZES.MEDIUM}
          style={BUTTON.STYLES.OUTLINE_PRIMARY}
          onClick={navigateProductsPage}
        >
          View product
        </Button>
      </div>
    </section>
  );
};

export default memo(Banner);
