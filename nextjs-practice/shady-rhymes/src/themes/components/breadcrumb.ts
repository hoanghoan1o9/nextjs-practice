export const Breadcrumb = {
  baseStyle: {
    link: {
      fontSize: 'small',
      fontWeight: '400'
    }
  },
  variants: {
    primary: {
      link: {
        color: 'grey.600',
        textDecoration: 'none',
        cursor: 'text',

        _hover: {
          textDecoration: 'none'
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};
