import { Chat, ChatModel } from '../../type';

export interface IChatStore {
  curChat: Chat | null;
  chatModels: ChatModel[];
  isNewChat: boolean;
  newChatModel: ChatModel | null;
  isComplete: boolean;

  setCurChat: (item: Chat | null) => void;
  setIsNewChat: (state: boolean) => void;
  setNewChatModel: (item: ChatModel) => void;
  setIsComplete: (state: boolean) => void;
}
