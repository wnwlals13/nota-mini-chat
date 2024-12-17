import ChatItem from './chat-item';
import { useChatStore } from '../../stores/chat/chatStore';
import { Chat } from '../../type';
import { useChatList } from '../../hooks/useChatList';
import Loading from '../../shared/loading/Loading';

export default function ChatList() {
  const { data: chats, isLoading } = useChatList(); /* 채팅 목록 */

  const { curChat, setCurChat, setIsAvailable } = useChatStore();

  /* 현재 채팅 선택 함수 */
  const handleClickChat = (item: Chat) => {
    setCurChat(item);
    setIsAvailable(true);
  };

  return (
    <div className="flex-1 flex flex-col items-start gap-2 w-full overflow-y-croll">
      {isLoading ? (
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
