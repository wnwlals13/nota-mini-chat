import MessageList from './message-list';
import { ChatModel } from '../../type';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';
import InputField from './Input-field';
import { useMessageList } from '../../hooks/useMessageList';
import { useEffect } from 'react';

export default function MessageSection() {
  const { data: dialogues } = useMessageList();
  const {
    chatModels,
    curChat,
    isNewChat,
    setNewChatModel,
    setIsAvailable,
    setCurChat,
    setChatModels,
  } = useChatStore();

  const handleSetChat = async (item: ChatModel) => {
    // 모델 변경 시, 초기화
    setCurChat(null);
    setIsAvailable(true);
    setNewChatModel(item.chat_model_id);
  };

  useEffect(() => {
    if (curChat || isNewChat) {
      setChatModels();
    }
  }, [curChat, isNewChat]);

  return (
    <div className="flex-1 w-full flex flex-col relative m-2 bg-white rounded-md overflow-hidden">
      <div className="pt-2 pl-2 pr-2">
        <Dropdown<ChatModel>
          items={chatModels}
          targetName="chat_model_name"
          targetTitle="Select Model"
          initialOption={curChat?.chat_model_name}
          disabled={isNewChat || !!curChat}
          onChange={(item) => handleSetChat(item)}
        />
      </div>
      <MessageList items={dialogues} />
      <InputField />
    </div>
  );
}
