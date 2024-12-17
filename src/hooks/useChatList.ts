import { useQuery } from '@tanstack/react-query';
import { fetchChats } from './api';

export const useChatList = () => {
  return useQuery({
    queryKey: ['chats'],
    queryFn: fetchChats,
  });
};
