// Libs
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './navigation.css';

export interface INavigation {
  key: string;
  label?: string;
  src?: string;
  alt?: string;
  path?: string;
}

interface Props {
  menuBar?: string;
  menuList: INavigation[];
}

const NavigationBase = ({ menuList = [] }: Props): JSX.Element => {
  const renderMenuList = (list: INavigation[]): JSX.Element[] =>
    list.map(({ key, label, src, alt, path }) => (
      <li className="nav__item" key={key}>
        <NavLink to={path ? path : ''}>
          {label}
          {src && <img className="nav__item-image" src={src} alt={alt} />}
        </NavLink>
      </li>
    ));

  return (
    <nav className="nav">
      <ul className="nav__list">{renderMenuList(menuList)}</ul>
    </nav>
  );
};

export const Navigation = memo(NavigationBase);
