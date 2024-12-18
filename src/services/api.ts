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
  try {
    const response = await axios.get(`/chats/${chatId}`);
    if (!response) {
      return { data: [] };
    }
    const results = response.data.data;
    return results.dialogues;
  } catch (err) {
    throw new Error('failed to load messages');
  }
};

export const addMessage = async ({ chatId, prompt }: RequestMsgDto) => {
  try {
    const response = await axios.post(`/chats/${chatId}/dialogues`, { prompt: prompt });
    if (!response) {
      return { status: 500 };
    }
    const results = response.data;
    return results;
  } catch (err) {
    throw new Error('failed to add message');
  }
};

export const addChat = async (chatModelId: string) => {
  try {
    const response = await axios.post(`/chats`, { chat_model_id: chatModelId });
    if (!response) {
      return { status: 500 };
    }
    const results = response.data;
    return results;
  } catch (err) {
    throw new Error('failed to add chat');
  }
};
