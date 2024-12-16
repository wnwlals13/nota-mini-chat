import { useEffect, useRef, useState } from 'react';
import TextArea from '../../shared/inputs/textarea/component';
import { useChatStore } from '../../stores/chat/chatStore';
import Button from '../../shared/buttons/component';
import { useAddMessage } from '../../hooks/useAddMessage';
import { useAddChat } from '../../hooks/useAddChat';

export default function InputField() {
  const { curChat, isAvailable, isNewChat, newChatModel, setIsNewChat } = useChatStore();
  const [prompt, setPrompt] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: addChat, isSuccess: chatSuccess } = useAddChat();
  const { mutate: addMsg, isSuccess: msgSuccess } = useAddMessage();

  const handleSubmit = async () => {
    // 새 채팅이고, 채팅 모델을 선택했으면 새롭게 추가
    if (isNewChat && newChatModel) {
      addChat(newChatModel);
    }

    // 새 채팅 해제
    setIsNewChat(false);

    if (curChat) addMsg({ chatId: curChat.chat_id, prompt: prompt });
  };

  useEffect(() => {
    if (chatSuccess && curChat) addMsg({ chatId: curChat.chat_id, prompt: prompt });
  }, [chatSuccess]);

  useEffect(() => {
    // textarea 초기화
    if (msgSuccess && inputRef.current) inputRef.current.value = '';
  }, [msgSuccess]);

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
