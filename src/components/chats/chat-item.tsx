import clsx from 'clsx';
import { Chat } from '../../type';
import React from 'react';

export interface ChatItemProps {
  item: Chat;
  isSelected?: boolean /* 현재 채팅 여부 */;
  handleClick: () => void;
}

const ChatItem = React.memo(function ChatItem({ item, isSelected, handleClick }: ChatItemProps) {
  if (!item) return null;

  const { chat_model_name, dialogues } = item;

  const styles = clsx('w-full h-[60px] border-b-[1px] p-2 cursor-pointer', {
    'bg-gray1 rounded-md': isSelected,
  });

  return (
    <a className={styles} onClick={handleClick}>
      <div className="truncate">{dialogues[0]?.prompt}</div>
      <div className="flex justify-end text-sm text-gray-500">{chat_model_name}</div>
    </a>
  );
});

export default ChatItem;
