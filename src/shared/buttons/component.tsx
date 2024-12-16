import { cva } from 'class-variance-authority';
import { ButtonProps } from './type';

export const buttonVariants = cva(
  `inline-flex min-w-[50px] items-center justify-center rounded-md`,
  {
    variants: {
      size: { sm: 'w-2', md: 'w-4', full: 'w-full' },
      color: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'border border-secondary-foreground bg-secondary text-secondary-foreground',
      },
    },
  },
);

export default function Button({ size, color, children, ...props }: ButtonProps) {
  const className = buttonVariants({ size, color });

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
