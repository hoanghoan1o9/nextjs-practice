// Libs
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Component
import Button from 'components/Button';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import './notFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateHomePage = () => {
    navigate('/', { replace: true });
  };

  return (
    <section className="not-found">
      <h2 className="not-found-heading">404 ERROR</h2>
      <p className="not-found-description">
        This page not found,back to home and start again
      </p>

      <Button
        type="button"
        size={BUTTON.SIZES.MEDIUM}
        style={BUTTON.STYLES.OUTLINE_SECONDARY}
        onClick={navigateHomePage}
      >
        HOMEPAGE
      </Button>
    </section>
  );
};

export default NotFoundPage;
