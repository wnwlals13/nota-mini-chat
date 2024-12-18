import { ReactNode } from 'react';

export default function Profile({ children }: { children?: ReactNode }) {
  return (
    <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">{children}</div>
  );
}
