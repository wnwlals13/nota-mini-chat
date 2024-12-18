import { RequestMsgDto } from './messages/useAddMessage';

export const fetchChats = async () => {
  const response = await fetch('/chats', { method: 'GET' })
    .then((res) => res.json())
    .then((res) => res.data);

  return response;
};

export const fetchChatModels = async () => {
  const response = await fetch('/chat_model', { method: 'GET' })
    .then((res) => res.json())
    .then((res) => res.data);

  return response;
};

export const fetchMessages = async (chatId: string) => {
  const response = await fetch(`/chats/${chatId}`)
    .then((res) => res.json())
    .then((res) => res.data.dialogues);

  return response;
};

export const addMessage = async ({ chatId, prompt }: RequestMsgDto) => {
  const response = await fetch(`/chats/${chatId}/dialogues`, {
    method: 'POST',
    body: JSON.stringify({ prompt: prompt }),
  }).then((res) => res.json());

  return response;
};

export const addChat = async (chatModelId: string) => {
  const response = await fetch('/chats', {
    method: 'POST',
    body: JSON.stringify({ chat_model_id: chatModelId }),
  }).then((res) => res.json());

  return response;
};
