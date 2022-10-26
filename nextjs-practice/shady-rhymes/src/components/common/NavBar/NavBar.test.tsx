// Libraries
import React from 'react';
import { cleanup, render } from '@testing-library/react';

// Components
import NavBar from './index';

import { NAV_ITEMS } from '@constants/navigation';

describe('NavBar render', () => {
  afterEach(cleanup);

  it('should render NavBar component', () => {
    const { getByTestId } = render(<NavBar navItems={NAV_ITEMS} />);

    const navBar = getByTestId('TestNavbar');
    expect(navBar).toBeTruthy();
    expect(navBar).toMatchSnapshot();
  });
});
