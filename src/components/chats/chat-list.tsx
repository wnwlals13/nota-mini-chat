import ChatItem from './chat-item';
import { useChatStore } from '../../stores/chat/chatStore';
import { Chat } from '../../type';
import { useChatList } from '../../services/chats/useChatList';
import Loading from '../../shared/loading/Loading';
import { useCallback } from 'react';

export default function ChatList() {
  const { data: chats, isLoading } = useChatList(); /* 채팅 목록 */

  const { curChat, setCurChat } = useChatStore();

  /* 현재 채팅 선택 함수 */
  const handleClickChat = useCallback(
    (item: Chat) => {
      setCurChat(item);
    },
    [setCurChat],
  );

  /* 채팅 선택 여부 */
  const handleSelected = useCallback(
    (chatId: string) => {
      return curChat?.chat_id === chatId;
    },
    [curChat],
  );

  return (
    <div className="flex w-full flex-1 flex-col items-start gap-2 overflow-y-scroll">
      {isLoading && !chats ? (
        <>
          <Loading />
        </>
      ) : (
        chats.map((chat: any) => (
          <ChatItem
            key={chat.chat_id}
            item={chat}
            isSelected={handleSelected(chat.chat_id)}
            handleClick={() => handleClickChat(chat)}
          />
        ))
      )}
    </div>
  );
}
