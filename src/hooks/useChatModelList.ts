import { useQuery } from '@tanstack/react-query';
import { fetchChatModels } from './api';
import { useChatStore } from '../stores/chat/chatStore';

export const useChatModelList = () => {
  const { curChat, isNewChat } = useChatStore();
  return useQuery({
    queryKey: ['chatModels'],
    queryFn: fetchChatModels,
    enabled: !!curChat || !!isNewChat /* 현재 채팅이 존재하거나, 새로운 채팅이거나 */,
  });
};
