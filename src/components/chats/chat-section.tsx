import { useCallback } from 'react';
import Button from '../../shared/buttons/component';
import { useChatStore } from '../../stores/chat/chatStore';
import ChatList from './chat-list';
import { FiPlusSquare } from 'react-icons/fi';

function NewButton() {
  const { setIsNewChat, setCurChat } = useChatStore();

  const handleAddChat = useCallback(() => {
    // 새 채팅 추가
    setCurChat(null);
    setIsNewChat(true);
  }, []);

  return (
    <div className="mb-2">
      <Button color="secondary" size="md" onClick={handleAddChat}>
        <FiPlusSquare className="w-full h-full" />
      </Button>
    </div>
  );
}

export default function ChatSection() {
  return (
    <div className="min-w-[300px] m-2 p-2 flex flex-col items-end bg-white rounded-md">
      <NewButton />
      <ChatList />
    </div>
  );
}
