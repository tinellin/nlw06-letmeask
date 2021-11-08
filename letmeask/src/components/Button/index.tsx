import { ButtonHTMLAttributes } from 'react';
import { SButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  styles?: {
    color?: string;
    bgColor?: string;
  };
};

export function Button({ isOutlined, styles, ...props }: ButtonProps) {
  return (
    <SButton
      {...props}
      className={`button ${isOutlined ? 'outlined' : ''}`}
      color={styles?.color}
      bgColor={styles?.bgColor}
    />
  );
}
