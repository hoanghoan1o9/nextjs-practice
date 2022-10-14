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
        color: '#2D3748',
        border: '1px solid #ffffff',
        // borderColor: 'grey.400',
        borderWidth: '1px',
        borderStyle: 'solid',

        _focusVisible: {
          borderColor: '#ffffff',
        },
      },
      element: {
        backgroundColor: '#faf5f2',
        color: '#a09386',
        width: '10px',
        height: '10px',
        borderRadius: '30px',
      },
    },
    withElement: {},
  },
  defaultProps: {
    size: 'withAddon',
    variant: 'withAddon',
  },
};
