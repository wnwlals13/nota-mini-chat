import { forwardRef } from 'react';
import { ITextAreaOptions } from './type';

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaOptions>(function TextArea(props, ref) {
  return (
    <textarea
      className="border w-full h-full min-h-[78px] p-1 focus:outline-none resize-none"
      ref={ref}
      {...props}
    ></textarea>
  );
});

export default TextArea;
