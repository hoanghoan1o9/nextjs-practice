export const Input = {
  sizes: {
    withAddon: {
      field: {
        fontSize: 'small',
        lineHeight: '60px',
        px: '25px',
        borderRadius: '30px',
      },
    },
  },
  variants: {
    withAddon: {
      field: {
        color: 'grey.300',
        border: '1px solid light',
        backgroundColor: '#ffffff80',

        _focusVisible: {
          borderColor: 'light',
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
