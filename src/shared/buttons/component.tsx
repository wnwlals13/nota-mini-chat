import { cva } from 'class-variance-authority';
import { ButtonProps } from './type';

export const buttonVariants = cva(
  `inline-flex min-h-[15px] items-center justify-center rounded-md`,
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        outline: 'border border-gray-500',
        disabled: 'bg-gray-200 cursor-not-allowed',
      },
      size: { sm: 'w-[20px]', md: 'w-[30px]', lg: 'w-[50px]', full: 'w-full' },
      color: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
    },
  },
);

export default function Button({
  variant = 'default',
  size,
  color,
  children,
  ...props
}: ButtonProps) {
  const className = buttonVariants({ variant, size, color });

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
