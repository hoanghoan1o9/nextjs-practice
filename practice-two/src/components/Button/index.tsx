// Libs
import React, { memo } from 'react';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import './button.css';

interface Props {
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  style?: BUTTON.STYLES;
  size?: BUTTON.SIZES;
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  disabled = false,
  type,
  style = BUTTON.STYLES.OUTLINE_SECONDARY,
  size = BUTTON.SIZES.MEDIUM,
  children,
  onClick,
}) => (
  <button
    className={`btn ${style} ${size}`}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
