import { useEffect, useState } from 'react';
import MessageList from './message-list';
import { ChatModel, Dialogue } from '../../type';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';
import InputField from './Input-field';

export default function MessageSection() {
  const {
    chatModels,
    curChat,
    isNewChat,
    setNewChatModel,
    setIsAvailable,
    setChats,
    setCurChat,
    setChatModels,
  } = useChatStore();
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);

  const handleSetChat = async (item: ChatModel) => {
    // 모델 변경 시, 초기화
    setCurChat(null);
    setIsAvailable(true);
    setNewChatModel(item.chat_model_id);
  };

  const fetchMessages = async (chatId: string) => {
    await fetch(`/chats/${chatId}`)
      .then((res) => res.json())
      .then((res) => setDialogues(res.data.dialogues));

    setChats();
  };

  useEffect(() => {
    if (curChat) {
      fetchMessages(curChat.chat_id);
      setChatModels();
    } else setDialogues([]);
  }, [curChat]);

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
      <InputField fetchMessages={fetchMessages} />
    </div>
  );
}
