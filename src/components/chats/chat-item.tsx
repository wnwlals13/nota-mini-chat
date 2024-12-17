import { Chat } from '../../type';

export interface ChatItemProps {
  item: Chat;
  isSelected?: boolean /* 현재 채팅 여부 */;
  handleClick: () => void;
}

export default function ChatItem({ item, isSelected, handleClick }: ChatItemProps) {
  if (!item) return null;

  const { chat_model_name, dialogues } = item;

  return (
    <a
      className={`w-full min-h-[50px] border-b-[1px] p-2 cursor-pointer ${
        isSelected ? 'bg-gray1 rounded-md' : ''
      }`}
      onClick={handleClick}
    >
      <div>{dialogues[0]?.prompt}</div>
      <div>{chat_model_name}</div>
    </a>
  );
}
