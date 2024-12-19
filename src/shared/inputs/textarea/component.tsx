import { forwardRef } from 'react';
import { ITextAreaOptions } from './type';
import { clsx } from 'clsx';

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaOptions>(function TextArea(
  { className, ...props },
  ref,
) {
  const styles = clsx(
    className,
    'w-full h-full min-h-[78px] p-1 border focus:outline-none resize-none',
  );

  return <textarea className={styles} ref={ref} {...props}></textarea>;
});

export default TextArea;
