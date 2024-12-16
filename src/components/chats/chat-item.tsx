import { Chat } from '../../type';

export default function ChatItem({
  item,
  isSelected,
  handleClick,
}: {
  item: Chat;
  isSelected?: boolean;
  handleClick: () => void;
}) {
  return (
    <a
      className={`w-full min-h-[50px] border-b-[1px] p-2 cursor-pointer ${
        isSelected ? 'bg-gray1 rounded-md' : ''
      }`}
      onClick={handleClick}
    >
      <div>{item.dialogues[0]?.prompt}</div>
      <div>{item.chat_model_name}</div>
    </a>
  );
}
