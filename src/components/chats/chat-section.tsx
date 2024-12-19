import { useCallback } from 'react';
import Button from '../../shared/buttons/component';
import { useChatStore } from '../../stores/chat/chatStore';
import ChatList from './chat-list';
import { FiPlusSquare } from 'react-icons/fi';

export default function ChatSection() {
  const { setIsNewChat, setCurChat } = useChatStore();

  const handleAddChat = useCallback(() => {
    // 새 채팅 추가
    setCurChat(null);
    setIsNewChat(true);
  }, []);

  return (
    <div className="m-2 flex w-[300px] flex-col items-end overflow-y-scroll rounded-md bg-white p-2">
      <div className="mb-2">
        <Button color="secondary" size="md" onClick={handleAddChat}>
          <FiPlusSquare className="h-full w-full" />
        </Button>
      </div>
      <ChatList />
    </div>
  );
}
