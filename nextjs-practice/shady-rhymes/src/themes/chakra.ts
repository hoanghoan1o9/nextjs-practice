// Libraries
import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// Component themes
import { Button } from './components/button';
import { Input } from './components/input';
import { Text } from './components/text';
import { Link } from './components/link';
import { Breadcrumb } from './components/breadcrumb';
import { colors } from './colors';
import { fontSizes } from './fontSizes';

const fonts = {
  ...chakraTheme.fonts,
  body: `font-family: 'Poppins', sans-serif`,
  heading: `font-family: 'Poppins', sans-serif`,
};

const overrides = {
  components: {
    Button,
    Input,
    Text,
    Link,
    Breadcrumb,
  },
  colors,
  fontSizes,
  fonts,
};

export const CHAKRA_THEME = extendTheme(overrides);
