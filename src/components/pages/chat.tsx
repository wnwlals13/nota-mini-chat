import { useEffect } from 'react';
import { useChatStore } from '../../stores/chat/chatStore';
import ChatSection from '../chats/chat-section';
import MessageSection from '../messages/message-section';

export default function ChatPage() {
  const { setChats } = useChatStore();

  useEffect(() => {
    setChats();
  }, []);

  return (
    <div className="flex h-screen bg-gray1">
      <ChatSection />
      <MessageSection />
    </div>
  );
}
