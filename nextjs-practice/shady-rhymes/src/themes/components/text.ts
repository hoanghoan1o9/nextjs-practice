export const Text = {
  sizes: {
    xSmall: {
      fontSize: 'xSmall',
    },
    tiny: {
      fontSize: 'tiny',
    },
    small: {
      fontSize: 'small',
    },
    default: {
      fontSize: 'default',
    },
    medium: {
      fontSize: 'medium',
    },
    large: {
      fontSize: 'large',
    },
    xLarge: {
      fontSize: 'xLarge',
    },
  },
  variants: {
    default: {
      color: '#564e4e',
    },
    primary: {
      color: 'grey.800',
      fontWeight: 900,
    },
    secondary: {
      color: 'grey.800',
      fontWeight: 900,

      _hover: {
        color: 'blue.300',
      },
    },

    error: {
      color: 'red.100',
    },

    description: {
      color: 'grey.600',
      textTransform: 'uppercase',
    },

    tag: {
      color: 'blue.100',
      cursor: 'pointer',
      fontWeight: 700,
    },

    heading: {
      fontWeight: '900',
      color: 'grey.800',
      lineHeight: 1.2,
    },

    subHeading: {
      color: 'grey.500',
      fontWeight: '500',
      lineHeight: 1.2,
    },

    navBar: {
      color: 'grey.600',
      fontWeight: '500',
      _groupHover: {
        color: 'primary',
      },
    },

    postCardTitle: {
      fontWeight: '900',
      color: 'grey.800',
      lineHeight: 1.2,

      _hover: {
        color: 'primary',
      },
    },

    categoryCardTitle: {
      fontWeight: '500',
      color: 'grey.800',
      lineHeight: 1.5,

      _hover: {
        color: 'primary',
      },
    },

    cardDescription: {
      color: 'grey.600',
      fontWeight: '400',
    },

    widgetHeading: {
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: 'grey.800',
      fontWeight: '500',
    },

    widgetDescription: {
      color: 'grey.800',
      fontWeight: '400',
      lineHeight: 1.5,
    },

    widgetDescriptionBold: {
      color: 'grey.800',
      fontWeight: 'bolder',
      lineHeight: 1.5,
    },

    widgetLink: {
      color: 'grey.600',
      fontWeight: '400',

      _hover: {
        color: 'primary',
      },
    },
  },
  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
