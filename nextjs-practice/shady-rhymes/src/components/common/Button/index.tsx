// Libraries
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from '@chakra-ui/react';

interface ButtonProps extends ButtonPropsChakra {
  disabled?: boolean;
  size?: 'default' | 'primary' | 'secondary';
  variant?: 'default' | 'primary' | 'secondary';
  label: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  isDisabled = false,
  children,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonChakra isDisabled={isDisabled} data-testid="testButton" {...props}>
      {label}
      {children}
    </ButtonChakra>
  );
};