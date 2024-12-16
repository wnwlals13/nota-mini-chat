import ChatSection from '../chats/chat-section';
import MessageSection from '../messages/message-section';

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray1">
      <ChatSection />
      <MessageSection />
    </div>
  );
}
