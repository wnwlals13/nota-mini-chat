import { ReactNode } from 'react';

export default function Profile({ children }: { children?: ReactNode }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">{children}</div>
  );
}
