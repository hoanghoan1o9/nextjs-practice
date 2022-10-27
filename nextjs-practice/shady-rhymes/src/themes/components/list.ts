import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
const helpers = createMultiStyleConfigHelpers(['list', 'item']);
export const ListStyle = helpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      rounded: 'lg',
      flexDirection: 'column',
      py: '2',
    },

    item: {
      borderWidth: '1px ',
      borderStyle: 'solid',
      borderColor: 'mainShadow',

      borderRadius: '10px',

      _hover: {
        shadow: '4px 2px 10px 2px rgba(247, 148, 137, 0.2)',
      },
    },
  },

  sizes: {
    sm: {
      item: {},
    },
    defaultProps: {},
  },
});
