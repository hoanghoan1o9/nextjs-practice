// Libraries
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from '@chakra-ui/react';

interface ButtonProps extends ButtonPropsChakra {
  disabled?: boolean;
  size?: 'default' | 'primary' | 'secondary' | 'close';
  variant?: 'default' | 'primary' | 'secondary' | 'close';
  label: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  isDisabled = false,
  size = 'default',
  variant = 'default',
  children,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonChakra
      size={size}
      variant={variant}
      isDisabled={isDisabled}
      data-testid="testButton"
      {...props}
    >
      {label}
      {children}
    </ButtonChakra>
  );
};
