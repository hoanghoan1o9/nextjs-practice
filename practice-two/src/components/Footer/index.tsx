// Libs
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from 'components/Input';

// Constants
import { INPUT } from 'constants/input';

// Images
import {
  arrowRightIcon,
  faceBookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
} from 'assets/index';

// Styles
import './footer.css';

const Footer = (): JSX.Element => (
  <section className="footer">
    <div>
      <nav className="footer__nav">
        <ul className="footer__nav__list">
          <li className="footer__nav__item">
            <Link to="">CONTACT</Link>
          </li>
          <li className="footer__nav__item">
            <Link to="">TERMS OF SERVICES</Link>
          </li>
          <li className="footer__nav__item">
            <Link to="">SHIPPING AND RETURNS</Link>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">
        <span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy
        policy.
      </p>
    </div>
    <div className="footer__contact">
      <div className="footer__contact__input">
        <Input
          size={INPUT.SIZES.MEDIUM}
          style={INPUT.STYLES.PRIMARY}
          type="email"
          placeholder="Give an email, get the newsletter."
        />
        <div className="footer__contact-icon">
          <img src={arrowRightIcon} alt="arrowRightIcon" />
        </div>
      </div>
      <ul className="footer__contact__social-networks">
        <li className="footer__contact__social-networks__item item">
          <a href="https://www.linkedin.com">
            <img className="item__icon" src={linkedInIcon} alt="linkedInIcon" />
          </a>
        </li>
        <li className="footer__contact__social-networks__item item">
          <a href="https://www.facebook.com">
            <img className="item__icon" src={faceBookIcon} alt="faceBookIcon" />
          </a>
        </li>
        <li className="footer__contact__social-networks__item item">
          <a href="https://www.instagram.com">
            <img className="item__icon" src={instagramIcon} alt="" />
          </a>
        </li>
        <li className="footer__contact__social-networks__item item">
          <a href="https://twitter.com/">
            <img className="item__icon" src={twitterIcon} alt="twitterIcon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default memo(Footer);
