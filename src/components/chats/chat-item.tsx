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
      className={`w-full border-b-[1px] p-2 ${isSelected ? 'bg-gray1 rounded-md' : ''}`}
      onClick={handleClick}
    >
      <div>{item.dialogues[0].completion}</div>
      <div>{item.chat_model_name}</div>
    </a>
  );
}
