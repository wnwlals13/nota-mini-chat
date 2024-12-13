import { Chat, ChatModel } from '../../type';

export interface IChatStore {
  chats: Chat[];
  curChat: string;
  chatModels: ChatModel[];
  setChats: () => void;
  setCurChat: (id: string) => void;
  setChatModels: () => void;
}
