// Libs
import React, { memo } from 'react';

// Constants
import { BUTTON } from 'constants/button';

// Styles
import './counter.css';

interface Props {
  style?: string;
  size?: string;
  count: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

const Counter: React.FC<Props> = ({
  style = BUTTON.STYLES.PRIMARY,
  size = BUTTON.SIZES.SMALL,
  count,
  onIncrease,
  onDecrease,
}) => (
  <div className="counter">
    <button
      className={`btn ${style} ${size}`}
      type="button"
      onClick={onDecrease}
    >
      -
    </button>
    <div>{count}</div>
    <button
      className={`btn ${style} ${size}`}
      type="button"
      onClick={onIncrease}
    >
      +
    </button>
  </div>
);

export default memo(Counter);
