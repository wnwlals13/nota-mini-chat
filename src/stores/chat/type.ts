import { Chat, ChatModel } from '../../type';

export interface IChatStore {
  curChat: Chat | null;
  chatModels: ChatModel[];
  isAvailable: boolean;
  isNewChat: boolean;
  newChatModel: string;
  isComplete: boolean;

  setCurChat: (item: Chat | null) => void;
  setIsAvailable: (state: boolean) => void;
  setIsNewChat: (state: boolean) => void;
  setNewChatModel: (id: string) => void;
  setIsComplete: (state: boolean) => void;
}
