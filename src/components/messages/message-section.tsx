import MessageList from './message-list';
import { ChatModel } from '../../type';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';
import InputField from './Input-field';
import { useChatModelList } from '../../hooks/useChatModelList';

export default function MessageSection() {
  const { data: chatModels } = useChatModelList();
  const { curChat, isNewChat, setNewChatModel, setIsAvailable, setCurChat } = useChatStore();

  const handleSetChat = async (item: ChatModel) => {
    // 모델 변경 시, 초기화
    setCurChat(null);
    setIsAvailable(true);
    setNewChatModel(item.chat_model_id);
  };

  return (
    <div className="flex-1 w-full flex flex-col relative m-2 bg-white rounded-md overflow-hidden">
      <div className="pt-2 pl-2 pr-2">
        <Dropdown<ChatModel>
          items={chatModels}
          displayName="chat_model_name"
          placeholder="Select Model"
          initialOption={curChat?.chat_model_name}
          disabled={isNewChat || !!curChat}
          onChange={(item) => handleSetChat(item)}
        />
      </div>
      <MessageList />
      <InputField />
    </div>
  );
}
