// Libs
import { render } from '@testing-library/react';

// Components
import { Footer } from '@components/common/Footer';

describe('Footer render', () => {
  it('Should render Footer component', () => {
    const { getByTestId } = render(<Footer />);

    const footer = getByTestId('TestFooter');
    expect(footer).toBeTruthy();
    expect(footer).toMatchSnapshot();
  });
});
