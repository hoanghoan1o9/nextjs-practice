// Libs
import React, { memo } from 'react';

// Constants
import { INPUT } from 'constants/input';

// Styles
import './input.css';

interface Props {
  type: React.HTMLInputTypeAttribute;
  style?: INPUT.STYLES;
  size?: INPUT.SIZES;
  name?: string;
  placeholder: string;
  onChange?: () => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
}

const Input: React.FC<Props> = ({
  style = INPUT.STYLES.PRIMARY,
  size = INPUT.SIZES.SMALL,
  type,
  placeholder,
  name,
  onChange,
  onKeyUp,
}) => (
  <input
    className={`input ${style} ${size}`}
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    onKeyUp={onKeyUp}
  />
);

export default memo(Input);
