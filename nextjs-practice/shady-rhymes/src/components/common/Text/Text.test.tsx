// Libraries
import React from 'react';
import { cleanup, render } from '@testing-library/react';

// Components
import Text from './index';

const mockProps = {
  value: 'Text',
};

describe('Text render', () => {
  afterEach(cleanup);

  it('should render text component as mock data', () => {
    const { getByTestId } = render(
      <Text data-testid="TestText" {...mockProps} />,
    );

    const text = getByTestId('TestText').textContent;
    expect(text).toEqual('Text');
  });
});
