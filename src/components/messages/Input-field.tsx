import { useRef, useState } from 'react';
import TextArea from '../../shared/inputs/textarea/component';
import { useChatStore } from '../../stores/chat/chatStore';
import Button from '../../shared/buttons/component';

export default function InputField({
  fetchMessages,
}: {
  fetchMessages: (chatId: string) => Promise<void>;
}) {
  const { curChat, isAvailable, isNewChat, newChatModel, setCurChat, setChats, setIsNewChat } =
    useChatStore();
  const [prompt, setPrompt] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    // 새 채팅이고, 채팅 모델을 선택했으면 새롭게 추가
    if (isNewChat && newChatModel) {
      const resposne = await fetch('/chats', {
        method: 'POST',
        body: JSON.stringify({ chat_model_id: newChatModel }),
      });
      const results = await resposne.json();

      setCurChat(results.data[results.data.length - 1]);
      setChats();
      addMsgToChat(results.data[results.data.length - 1].chat_id);

      // 새 채팅 해제
      setIsNewChat(false);
    }

    if (curChat) addMsgToChat(curChat?.chat_id);
  };

  const addMsgToChat = async (chatId: string) => {
    await fetch(`/chats/${chatId}/dialogues`, {
      method: 'POST',
      body: JSON.stringify({ prompt: prompt }),
    });

    // 메세지 petch
    fetchMessages(chatId);

    // textarea 초기화
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full absolute bottom-0 p-2 flex gap-2 bg-white">
      <div className="w-full">
        <TextArea
          ref={inputRef}
          disabled={isAvailable}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <Button color="primary" disabled={isAvailable} onClick={handleSubmit}>
        제출
      </Button>
    </div>
  );
}
