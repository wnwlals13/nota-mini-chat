import MessageList from './message-list';
import { ChatModel } from '../../type';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';
import InputField from './Input-field';
import { useChatModelList } from '../../hooks/chats/useChatModelList';

export default function MessageSection() {
  const { data: chatModels } = useChatModelList();
  const { curChat, isNewChat, setNewChatModel, setCurChat } = useChatStore();

  /* Dropdown 변경 이벤트 발생 시, Chat 데이터 설정 */
  const handleSetChat = async (item: ChatModel) => {
    setCurChat(null);
    setNewChatModel(item);
  };

  const isDisabled =
    isNewChat || !!curChat; /* 채팅 선택 가능 여부 : 새로운 채팅이거나, 기존 채팅이거나 */

  return (
    <div className="flex-1 w-full flex flex-col relative m-2 bg-white rounded-md overflow-hidden">
      <div className="pt-2 pl-2 pr-2">
        <Dropdown<ChatModel>
          items={chatModels as ChatModel[]}
          displayName="chat_model_name"
          placeholder="Select Model"
          disabled={isDisabled}
          currentOption={curChat}
          onChange={handleSetChat}
        />
      </div>
      <MessageList />
      <InputField />
    </div>
  );
}
