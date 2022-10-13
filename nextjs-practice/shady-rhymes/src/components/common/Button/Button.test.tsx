// Libraries
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

// Components
import { Button } from './';

const mockProps = {
  label: 'Button',
};

describe('Button render', () => {
  afterEach(cleanup);

  it('should render with label as mock data', () => {
    const { getByTestId } = render(<Button size="default" {...mockProps} />);

    const button = getByTestId('testButton').textContent;
    expect(button).toEqual('Button');
  });

  it('should simulate click and expect mock to call', () => {
    const mock = jest.fn();
    const { getByTestId } = render(<Button label="Button" onClick={mock} />);

    const button = getByTestId('testButton');

    fireEvent.click(button);
    expect(mock).toHaveBeenCalled();
  });
});
