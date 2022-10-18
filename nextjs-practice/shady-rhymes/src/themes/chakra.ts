// Libraries
import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// Component themes
import { Button } from './components/button';
import { Input } from './components/input';
import { Text } from './components/text';
import { Link } from './components/link';
import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { borders } from './borders';
import { shadows } from './shadows';

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
  },
  colors,
  fontSizes,
  fonts,
  borders,
  shadows,
};

export const CHAKRA_THEME = extendTheme(overrides);
