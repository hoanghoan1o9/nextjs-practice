export const Input = {
  sizes: {
    withAddon: {
      field: {
        fontSize: 'small',
        lineHeight: '24px',
        px: '25px',
        borderRadius: '30px 0 0 30px'
      }
    }
  },
  variants: {
    withAddon: {
      field: {
        color: 'grey.700',
        borderColor: 'grey.400',
        borderWidth: '1px',
        borderStyle: 'solid',

        _focusVisible: {
          borderColor: 'grey.400',
        }
      }
    }
  },
  defaultProps: {
    size: 'withAddon',
    variant: 'withAddon'
  }
};
