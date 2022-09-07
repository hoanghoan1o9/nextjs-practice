// Libs
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Footer } from 'components/Footer';

// Styles
import '../../styles/index.css';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Footer>;

export const FooterBase = () => <Footer />;
