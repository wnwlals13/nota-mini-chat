import { useMutation } from '@tanstack/react-query';
import { addChat } from './api';
import { Chat } from '../type';
import { useChatStore } from '../stores/chat/chatStore';

export interface ResponseChatDto {
  data: Chat[];
}

export const useAddChat = () => {
  const { setCurChat, setChats } = useChatStore();

  return useMutation<ResponseChatDto, Error, string>({
    mutationFn: addChat,
    onSuccess: (res) => {
      setCurChat(res.data[res.data.length - 1]);
      setChats();
    },
  });
};
