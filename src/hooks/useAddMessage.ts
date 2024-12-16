import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMessage } from './api';
import { useChatStore } from '../stores/chat/chatStore';

export interface RequestMsgDto {
  chatId: string;
  prompt: string;
}

export const useAddMessage = () => {
  const queryClient = useQueryClient();
  const { curChat } = useChatStore();

  return useMutation<any, Error, RequestMsgDto>({
    mutationFn: addMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', curChat?.chat_id] });
    },
  });
};
