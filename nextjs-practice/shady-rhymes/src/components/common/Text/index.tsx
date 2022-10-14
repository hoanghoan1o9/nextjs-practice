// Libraries
import {
  Text as TextChakra,
  TextProps as TextPropsChakra,
} from '@chakra-ui/react';

interface TextProps extends TextPropsChakra {
  value: string;
  size?:
    | 'xSmall'
    | 'tiny'
    | 'small'
    | 'default'
    | 'medium'
    | 'large'
    | 'xLarge';
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'description'
    | 'tag'
    | 'navBar'
    | 'heading'
    | 'subHeading'
    | 'postCardTitle'
    | 'categoryCardTitle'
    | 'cardDescription'
    | 'widgetHeading'
    | 'widgetDescription'
    | 'widgetDescriptionBold'
    | 'widgetLink';
}

export const TextBase = ({
  value = '',
  size = 'default',
  variant = 'default',
  ...props
}: TextProps) => (
  <TextChakra
    value={value}
    size={size}
    variant={variant}
    data-testid="testText"
    {...props}
  >
    {value}
  </TextChakra>
);