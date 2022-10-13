export const Button = {
  sizes: {
    default: {
      px: '20px',
      py: '10px',
      borderRadius: '30px'
    },

    rightAddon: {
      px: '25px',
      py: '16px',
      fontSize: 'small',
      borderRadius: '0 30px 30px 0'
    },

    tagButton: {
      px: '20px',
      py: '15px',
      fontSize: 'tiny',
      borderRadius: '30px',
      lineHeight: 0
    },

    rounded: {
      w: '24px',
      h: '24px',
      fontSize: '11px',
      borderRadius: '30px'
    }
  },

  baseStyle: {
    fontSize: 'default',
    bg: '',
    
    _hover: {
      _disabled: {
        bg: ''
      }
    },
    _focus: {
      boxShadow: ''
    }
  },

  variants: {
    default: {
      bg: 'primary',
      color: 'light',

      _hover: {
        bg: 'danger',
      }
    },

    tagButton: {
      bg: 'grey.100',
      color: 'grey.600',

      _hover: {
        color: 'primary',
      }
    },

    rounded: {
      _hover: {
        bg: '',
      }
    }
  },

  defaultProps: {
    size: 'default',
    variant: 'default'
  }
  
};
