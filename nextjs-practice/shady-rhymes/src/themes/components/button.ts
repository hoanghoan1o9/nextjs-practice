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
      fontSize: 'default',
      lineHeight: 0,
      borderRadius: '10px',
    },

    close: {
      px: '20px',
      py: '15px',
      fontSize: 'default',
      lineHeight: 0,
      borderWidth: '1px',
      borderColor: 'red.100',
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
      bg: 'blue.100',
      color: 'whiteText.100',

      _hover: {
        bg: 'blue.200',
      },
    },

    secondary: {
      color: 'red.100',

      _hover: {
        color: 'whiteText.100',
        bg: 'red.200',
      },
    },

    close: {
      // bg: 'red.200',
      color: 'red.100',

      _hover: {
        bg: 'red.100',
        color: 'whiteText.100',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
