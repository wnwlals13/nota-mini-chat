import { useEffect, useRef, useState } from 'react';
import TextArea from '../../shared/inputs/textarea/component';
import { useChatStore } from '../../stores/chat/chatStore';
import Button from '../../shared/buttons/component';
import { useAddMessage } from '../../hooks/messages/useAddMessage';
import { useAddChat } from '../../hooks/chats/useAddChat';
import { debounce } from '../../utils/common';
import { FiSend } from 'react-icons/fi';

export default function InputField() {
  const { curChat, isNewChat, newChatModel, setIsNewChat, setIsComplete } = useChatStore();

  const [prompt, setPrompt] = useState<string>('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  /* 입력 불가 : 채팅을 선택하지 않았거나, 모델이 선택되지 않았고 질문을 한 경우 */
  const [isTxtDisabled, setIsTxtDisabled] = useState<boolean>(true);
  /* 제출 불가 : 질문이 없거나 질문을 한 경우 */
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  const { mutate: addChat, isSuccess: chatSuccess } = useAddChat();
  const { mutate: addMsg, isSuccess: msgSuccess, isPending } = useAddMessage();

  const handleSubmit = () => {
    /* 질문이 없다면 리턴 */
    if (!prompt) return;

    /* 채팅 후 질문 답변 미완 처리 */
    setIsComplete(false);

    /* 새 채팅이고, 채팅 모델을 선택했으면 새롭게 추가 */
    if (isNewChat && newChatModel) {
      addChat(newChatModel!.chat_model_id);
    } else {
      if (curChat) addMsg({ chatId: curChat.chat_id, prompt: prompt });
    }

    /* 새 채팅 해제 */
    setIsNewChat(false);

    if (inputRef.current) inputRef.current.value = '';
  };

  useEffect(() => {
    /* 새채팅 추가 후, 해당 채팅에 대한 질문 추가 */
    if (chatSuccess && curChat && prompt) addMsg({ chatId: curChat.chat_id, prompt: prompt });
  }, [curChat, chatSuccess]);

  /* 질문 입력 이벤트 */
  const handlePrompt = debounce((e) => setPrompt(e.target.value));

  /* TextArea 내 Enter 이벤트 핸들러 */
  const handleKeyDonw = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    /* 질문이 끝나면 Textarea 질문 내용 초기화 */
    if (msgSuccess) {
      setPrompt('');
    }
  }, [msgSuccess]);

  useEffect(() => {
    if ((!!curChat || !!newChatModel) && !isPending) setIsTxtDisabled(false);
    else setIsTxtDisabled(true);
  }, [curChat, newChatModel, isPending]);

  useEffect(() => {
    if (!!prompt && !isPending) setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
  }, [prompt, isPending]);

  return (
    <div className="w-full absolute bottom-0 p-2 flex gap-2 bg-white">
      <div className="w-full">
        <TextArea
          ref={inputRef}
          disabled={isTxtDisabled}
          onChange={handlePrompt}
          placeholder="질문을 입력해주세요."
          onKeyDown={handleKeyDonw}
        />
      </div>
      <Button
        variant={`${isSubmitDisabled ? 'disabled' : 'default'}`}
        size="lg"
        color={isSubmitDisabled ? undefined : 'primary'}
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
      >
        <FiSend />
      </Button>
    </div>
  );
}
