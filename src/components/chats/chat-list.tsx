import ChatItem from './chat-item';
import { useChatStore } from '../../stores/chat/chatStore';
import { Chat } from '../../type';
import { useChatList } from '../../hooks/chats/useChatList';
import Loading from '../../shared/loading/Loading';

export default function ChatList() {
  const { data: chats, isLoading } = useChatList(); /* 채팅 목록 */

  const { curChat, setCurChat } = useChatStore();

  /* 현재 채팅 선택 함수 */
  const handleClickChat = (item: Chat) => {
    setCurChat(item);
  };

  return (
    <div className="flex-1 flex flex-col items-start gap-2 w-full overflow-y-scroll">
      {isLoading && !chats ? (
        <>
          <Loading />
        </>
      ) : (
        chats.map((chat: any) => (
          <ChatItem
            key={chat.chat_id}
            item={chat}
            isSelected={curChat?.chat_id === chat.chat_id}
            handleClick={() => handleClickChat(chat)}
          />
        ))
      )}
    </div>
  );
}
