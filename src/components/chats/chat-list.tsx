import ChatItem from './chat-item';
import { useChatStore } from '../../stores/chat/chatStore';

export default function ChatList() {
  const { chats, curChat, setCurChat } = useChatStore();

  /* 현재 채팅 선택 함수 */
  const handleClickChat = (chatId: string) => setCurChat(chatId);

  return (
    <div className="flex-1 flex flex-col items-start gap-2 w-full overflow-scroll">
      {chats?.map((chat) => (
        <ChatItem
          key={chat.chat_id}
          item={chat}
          isSelected={curChat == chat.chat_id}
          handleClick={() => handleClickChat(chat.chat_id)}
        />
      ))}
    </div>
  );
}
