import { useEffect, useRef, useState } from 'react';
import TextArea from '../../shared/inputs/textarea/component';
import { useChatStore } from '../../stores/chat/chatStore';
import Button from '../../shared/buttons/component';
import { useAddMessage } from '../../hooks/useAddMessage';
import { useAddChat } from '../../hooks/useAddChat';
import { debounce } from '../../utils/common';

export default function InputField() {
  const { curChat, isAvailable, isNewChat, newChatModel, setIsNewChat, setIsComplete } =
    useChatStore();
  const [prompt, setPrompt] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: addChat, isSuccess: chatSuccess } = useAddChat();
  const { mutate: addMsg, isPending } = useAddMessage();

  const handleSubmit = () => {
    /* 질문이 없다면 리턴 */
    if (!prompt) return;

    /* 질문 답변 중 여부 체크 */
    setIsComplete(false);

    /* 새 채팅이고, 채팅 모델을 선택했으면 새롭게 추가 */
    if (isNewChat && newChatModel) {
      addChat(newChatModel);
    }
    if (curChat) addMsg({ chatId: curChat.chat_id, prompt: prompt });

    /* 새 채팅 해제 */
    setIsNewChat(false);
  };

  /* 질문 입력 이벤튼 */
  const handlePrompt = debounce((e) => setPrompt(e.target.value));

  /* TextArea 내 Enter 이벤트 핸들러 */
  const handleKeyDonw = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (chatSuccess && curChat) addMsg({ chatId: curChat.chat_id, prompt: prompt });
  }, [chatSuccess]);

  useEffect(() => {
    /* 질문이 끝나면 Textarea 질문 내용 초기화 */
    if (!isPending) {
      if (inputRef.current) inputRef.current.value = '';
      setPrompt('');
    }
  }, [isPending]);

  return (
    <div className="w-full absolute bottom-0 p-2 flex gap-2 bg-white">
      <div className="w-full">
        <TextArea
          ref={inputRef}
          disabled={isAvailable || isPending}
          onChange={handlePrompt}
          onKeyDown={handleKeyDonw}
        />
      </div>
      <Button
        variant={`${!prompt ? 'disabled' : 'default'}`}
        color={!!prompt ? 'primary' : undefined}
        onClick={handleSubmit}
      >
        제출
      </Button>
    </div>
  );
}
