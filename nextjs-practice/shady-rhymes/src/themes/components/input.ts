export const Input = {
  sizes: {
    default: {},
    withAddon: {
      field: {
        fontSize: 'small',
        lineHeight: '60px',
        px: '25px',
        borderRadius: '30px',
        border: '1px solid black',
      },
    },
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        _focus: {
          borderColor: 'purple.400',
          boxShadow: 'none',
        },
      },
    },

    withAddon: {
      field: {
        color: 'black',
        border: '1px solid black',
        backgroundColor: '#ffffff80',

        _focusVisible: {
          borderColor: 'black',
        },
      },

      element: {
        backgroundColor: 'lightWhile',
        color: 'lightGold',
        width: '10px',
        height: '10px',
        borderRadius: '30px',
      },
    },
  },
  defaultProps: {
    size: 'withAddon',
    variant: 'withAddon',
  },
};
