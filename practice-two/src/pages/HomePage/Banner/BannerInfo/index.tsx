// Libs
import React from 'react';

// Styles
import './bannerInfo.css';

interface Props {
  title: string;
  price: number;
}

const BannerInfo = ({ title, price }: Props): JSX.Element => (
  <div className="banner__info">
    <div className="banner__info__title">{title}</div>
    <div className="banner__info__price">$ {price},00</div>
  </div>
);

export default BannerInfo;
