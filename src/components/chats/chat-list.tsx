import ChatItem from './chat-item';
import { useChatStore } from '../../stores/chat/chatStore';
import { Chat } from '../../type';

export default function ChatList() {
  const { chats, curChat, setCurChat, setIsAvailable } = useChatStore();

  /* 현재 채팅 선택 함수 */
  const handleClickChat = (chat: Chat) => {
    setCurChat(chat);
    setIsAvailable(true);
  };

  return (
    <div className="flex-1 flex flex-col items-start gap-2 w-full overflow-y-croll">
      {chats &&
        chats?.map((chat) => (
          <ChatItem
            key={chat.chat_id}
            item={chat}
            isSelected={curChat?.chat_id == chat.chat_id}
            handleClick={() => handleClickChat(chat)}
          />
        ))}
    </div>
  );
}
