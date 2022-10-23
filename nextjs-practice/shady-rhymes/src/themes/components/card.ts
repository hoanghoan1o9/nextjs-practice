import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    border: '1px solid mainBorder',
    boxShadow: '4px 2px 10px 2px mainShadow',
    borderRadius: '10px',
    width: '425px',
    height: '280px',
    backgroundColor: 'red',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: { width: '425px', height: '280px' },
    md: { width: '425px', height: '280px' },
    lg: { width: '425px', height: '280px' },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      border: '1px solid mainBorder',
      boxShadow: '4px 2px 10px 2px mainShadow',
      borderRadius: '10px',
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: 'lg',
    variant: 'solid',
  },
});
