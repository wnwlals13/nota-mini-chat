import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './component';
import { ButtonHTMLAttributes } from 'react';

export interface IButtonOptions extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export type ButtonProps = IButtonOptions & ButtonHTMLAttributes<HTMLButtonElement>;
