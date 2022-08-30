// Libs
import React, { memo } from 'react';

// Constants
import { DROPDOWN } from 'constants/dropdown';

// Styles
import './dropdown.css';

interface Dropdown {
  key: string;
  option: string;
  value: string;
}

export interface Props {
  style?: DROPDOWN.STYLES;
  size?: DROPDOWN.SIZES;
  options: Dropdown[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<Props> = ({
  style = DROPDOWN.SIZES.NORMAL,
  size,
  options = [],
  onChange,
}) => (
  <select className={`dropdown ${style} ${size}`} onChange={onChange}>
    {options.map(({ key, option, value }) => (
      <option key={key} value={value}>
        {option}
      </option>
    ))}
  </select>
);

export default memo(Dropdown);
