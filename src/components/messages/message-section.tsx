import { useEffect, useState } from 'react';
import Button from '../../shared/buttons/component';
import MessageList from './message-list';
import { Dialogue } from '../../type';
import Dropdown from '../../shared/dropdown/component';
import { useChatStore } from '../../stores/chat/chatStore';

export default function MessageSection() {
  const { chatModels, curChat, setChatModels } = useChatStore();
  const [dialogues, setDialogues] = useState<Dialogue[]>([]);

  useEffect(() => {
    setChatModels();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/chats/${curChat}`)
        .then((res) => res.json())
        .then((res) => setDialogues(res.data.dialogues));
    };
    fetchData();
  }, [curChat]);

  return (
    <div className="flex-1 w-full flex flex-col relative m-2 bg-white rounded-md overflow-hidden">
      <div className="p-2">
        <Dropdown items={chatModels} targetName="chat_model_name" />
      </div>
      <MessageList items={dialogues} />
      <div className="w-full absolute bottom-0 p-2 flex gap-2 bg-white">
        <div className="w-full">
          <textarea className="border w-full h-full"></textarea>
        </div>
        <Button color="primary">제출</Button>
      </div>
    </div>
  );
}
