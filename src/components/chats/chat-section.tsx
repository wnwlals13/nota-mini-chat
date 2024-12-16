import Button from '../../shared/buttons/component';
import { useChatStore } from '../../stores/chat/chatStore';
import ChatList from './chat-list';

export default function ChatSection() {
  const { setIsNewChat, setCurChat } = useChatStore();
  const handleAddChat = async () => {
    // 새 채팅 추가
    setCurChat(null);
    setIsNewChat(true);
  };
  return (
    <div className="min-w-[300px] m-2 p-2 flex flex-col items-end bg-white rounded-md">
      <div className="mb-2">
        <Button color="secondary" onClick={handleAddChat}>
          New
        </Button>
      </div>
      <ChatList />
    </div>
  );
}
