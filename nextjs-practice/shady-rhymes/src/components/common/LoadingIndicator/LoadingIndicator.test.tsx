import { render } from '@testing-library/react';
import { LoadingIndicator } from './';

describe('Loader component', () => {
  test('Should render Loader component', () => {
    const { getByTestId } = render(<LoadingIndicator />);
    const loader = getByTestId('testLoader');
    expect(loader).toBeTruthy();
  });
});
