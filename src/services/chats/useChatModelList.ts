import { useQuery } from '@tanstack/react-query';
import { useChatStore } from '../../stores/chat/chatStore';
import { fetchChatModels } from '../api';

export const useChatModelList = () => {
  const { curChat, isNewChat } = useChatStore();
  return useQuery({
    queryKey: ['chatModels'],
    queryFn: fetchChatModels,
    enabled: !!curChat || !!isNewChat /* 현재 채팅이 존재하거나, 새로운 채팅이거나 */,
  });
};
