// Libraries
import React from 'react';

// Context Providers
import { ProductsProvider } from './ProductContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};
