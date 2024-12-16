import { RequestMsgDto } from './useAddMessage';

export const fetchMessages = async (chatId: string) => {
  const response = await fetch(`/chats/${chatId}`)
    .then((res) => res.json())
    .then((res) => res.data.dialogues);

  return response;
};

export const addMessage = async ({ chatId, prompt }: RequestMsgDto) => {
  await fetch(`/chats/${chatId}/dialogues`, {
    method: 'POST',
    body: JSON.stringify({ prompt: prompt }),
  });
};

export const addChat = async (chatModelId: string) => {
  const response = await fetch('/chats', {
    method: 'POST',
    body: JSON.stringify({ chat_model_id: chatModelId }),
  }).then((res) => res.json());

  return response;
};
