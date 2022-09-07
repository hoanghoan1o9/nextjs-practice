// Libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import { Navigation, INavigation } from 'components/Navigation';

// Images
import { shoppeLogo } from 'assets/index';

// Styles
import './header.css';

interface Props {
  menuList: INavigation[];
}

const HeaderBase = ({ menuList }: Props): JSX.Element => (
  <header className="header">
    <Link to="/" className="header__logo">
      <img className="header__logo-img" src={shoppeLogo} alt="shoppeLogo" />
    </Link>
    <Navigation menuList={menuList} />
  </header>
);

export const Header = memo(HeaderBase);
