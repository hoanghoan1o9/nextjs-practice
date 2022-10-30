export const Link = {
  sizes: {
    navBar: {
      fontSize: 'default',
      fontWeight: '400',
    },
  },

  variants: {
    navBar: {
      color: '#ffffff',
      fontWeight: '400',

      _hover: {
        textDecoration: 'none',
        color: '#f1d0cc',
      },
    },

    normalLink: {
      color: '#f79489',
    },

    notFoundLink: {
      color: '#000',
      mt: '20px',
      padding: '20px',
      cursor: 'pointer',
      borderWidth: '1px',
      borderColor: '#000',
      borderStyle: 'solid',
      borderRadius: '30px',

      _hover: {
        bg: '#f79489',
        textDecoration: 'none',
      },
    },
  },
};
