import { Chat, ChatModel } from '../../type';

export interface IChatStore {
  chats: Chat[];
  curChat: Chat | null;
  chatModels: ChatModel[];
  isAvailable: boolean;
  isNewChat: boolean;
  newChatModel: string;
  setChats: () => void;
  setCurChat: (item: Chat | null) => void;
  setChatModels: () => void;
  setIsAvailable: (state: boolean) => void;
  setIsNewChat: (state: boolean) => void;
  setNewChatModel: (id: string) => void;
}
