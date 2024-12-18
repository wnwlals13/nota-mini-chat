import clsx from 'clsx';
import { Chat } from '../../type';

export interface ChatItemProps {
  item: Chat;
  isSelected?: boolean /* 현재 채팅 여부 */;
  handleClick: () => void;
}

export default function ChatItem({ item, isSelected, handleClick }: ChatItemProps) {
  if (!item) return null;

  const { chat_model_name, dialogues } = item;

  const styles = clsx('w-full min-h-[50px] border-b-[1px] p-2 cursor-pointer', {
    'bg-gray1 rounded-md': isSelected,
  });

  return (
    <a className={styles} onClick={handleClick}>
      <div className="overflow-hidden">{dialogues[0]?.prompt}</div>
      <div className="flex justify-end text-gray-500 text-sm">{chat_model_name}</div>
    </a>
  );
}
