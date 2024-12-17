import { useChatStore } from '../stores/chat/chatStore';
import { useQuery } from '@tanstack/react-query';
import { fetchMessages } from './api';

export const useMessageList = () => {
  const { curChat } = useChatStore();

  return useQuery({
    queryKey: ['messages', curChat?.chat_id],
    queryFn: () => fetchMessages(curChat!.chat_id),
    enabled: !!curChat?.chat_id,
  });
};
