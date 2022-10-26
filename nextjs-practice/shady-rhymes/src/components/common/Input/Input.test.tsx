// Libraries
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

// Components
import { Input } from './index';

describe('Button render', () => {
  afterEach(cleanup);

  it('should render chakra input', () => {
    const { getAllByTestId } = render(
      <Input placeholder="Search furniture" data-testid="TestInput" />,
    );

    const input = getAllByTestId('TestInput');
    expect(input).toBeTruthy();
    // expect(input).toHaveAttribute('placeholder', 'Search furniture');
  });

  it('should simulate change event and expect mock function to be called', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <Input
        data-testid="TestInput"
        placeholder="Search furniture"
        onChange={mockFunction}
      />,
    );

    const input = getByTestId('TestInput');

    fireEvent.change(input, { target: { value: 'My Name' } });
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should simulate blur event and expect mock function to be called', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <Input
        data-testid="TestInput"
        placeholder="Search furniture"
        onBlur={mockFunction}
      />,
    );

    const input = getByTestId('TestInput');

    fireEvent.blur(input);
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should simulate keydown event and expect mock function to be called', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <Input
        data-testid="TestInput"
        placeholder="Search furniture"
        onKeyDown={mockFunction}
      />,
    );

    const input = getByTestId('TestInput');

    fireEvent.keyDown(input);
    expect(mockFunction).toHaveBeenCalled();
  });
});
