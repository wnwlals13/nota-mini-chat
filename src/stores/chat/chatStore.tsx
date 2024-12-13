import { create } from 'zustand';
import { IChatStore } from './type';

const useChatStore = create<IChatStore>((set) => ({
  chats: [],
  curChat: '',
  chatModels: [],

  setChats: async () => {
    const response = await fetch('/chats').then((res) => res.json());
    set({ chats: response.data });
  },
  setCurChat: (id: string) => set({ curChat: id }),
  setChatModels: async () => {
    const resposne = await fetch('/chat_model').then((res) => res.json());
    set({ chatModels: resposne.data });
  },
}));

export { useChatStore };
