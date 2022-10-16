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
        borderWidth: '1px',
        borderStyle: 'solid',
        backgroundColor: '#ffffff80',

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
  },
  defaultProps: {
    size: 'withAddon',
    variant: 'withAddon',
  },
};
