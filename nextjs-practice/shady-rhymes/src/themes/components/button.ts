export const Button = {
  sizes: {
    default: {
      px: '25px',
      py: '16px',
      height: '20px',
      borderRadius: '10px',
    },

    primary: {
      px: '25px',
      py: '16px',
      fontSize: 'small',
      borderRadius: '0 30px 30px 0',
    },

    secondary: {
      px: '20px',
      py: '15px',
      fontSize: 'tiny',
      borderRadius: '30px',
      lineHeight: 0,
    },
  },

  baseStyle: {
    fontSize: 'default',
    bg: '',

    _hover: {
      _disabled: {
        bg: '',
      },
    },
    _focus: {
      boxShadow: '',
    },
  },

  variants: {
    default: {
      color: '#564e4e',
      border: '1px solid #f79489',
      fontSizes: 'small',

      _hover: {
        bg: '#f1d0cc',
      },
    },

    primary: {
      bg: '',
      color: '#564e4e',
      border: '1px solid #f79489',

      _hover: {
        bg: '#f1d0cc',
      },
    },

    secondary: {
      bg: '',
      color: '#564e4e',
      border: '1px solid #f79489',

      _hover: {
        bg: '#f1d0cc',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
