import axios from 'axios';
import { RequestMsgDto } from './messages/useAddMessage';

export const fetchChats = async () => {
  try {
    const response = await axios.get('/chats');

    if (!response) {
      return { data: [] };
    }

    const results = response.data;
    return results.data;
  } catch (err) {
    throw new Error('failed to load chats');
  }
};

export const fetchChatModels = async () => {
  try {
    const response = await axios.get('/chat_model');
    if (!response) {
      return { data: [] };
    }

    const results = response.data;
    return results.data;
  } catch (err) {
    throw new Error('failed to load chat models');
  }
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
