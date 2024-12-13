import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './component';

export interface IButtonProps extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}
