import { useEffect, useState } from 'react';
import { useChatModelList } from '../../services/chats/useChatModelList';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';
import { ChatModel } from '../../type';

export default function MessageHeader() {
  const { curChat, isNewChat, setNewChatModel, setCurChat, setIsNewChat } = useChatStore();
  const [isDisabled, setIsDisabled] = useState<boolean>(true); /* Dropdown 선택 가능 여부 (r) */
  const { data: chatModels } = useChatModelList();

  /* Dropdown 변경 이벤트 발생 시, New Chat 데이터 설정 */
  const handleSetChat = async (item: ChatModel) => {
    setCurChat(null);
    setNewChatModel(item);
    setIsNewChat(true);
  };

  useEffect(() => {
    if (isNewChat || !!curChat) setIsDisabled(false);
  }, [isNewChat, curChat]);

  return (
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
  );
}
