import React, { ReactNode } from 'react';
import Profile from '../../shared/profile/profile';
import NotaLogo from '../../assets/nota_logo.png';
import { FiUser } from 'react-icons/fi';
import clsx from 'clsx';

interface IMessageItemProps {
  isUser: boolean;
  text: string;
}

const MessageItem = React.memo(function MessageItem({ text, isUser }: IMessageItemProps) {
  const containerStyles = clsx('flex-1 flex gap-2', { 'justify-end': isUser });

  const renderProfile = (children: ReactNode) => {
    return <Profile>{children}</Profile>;
  };

  return (
    <div className={containerStyles}>
      {!isUser && renderProfile(<img src={NotaLogo} />)}
      <div className="flex max-w-[500px] items-center text-wrap rounded-lg bg-white p-2">
        {text}
      </div>
      {isUser && renderProfile(<FiUser />)}
    </div>
  );
});

export default MessageItem;
