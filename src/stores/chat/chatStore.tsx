import { create } from 'zustand';
import { IChatStore } from './type';

const useChatStore = create<IChatStore>((set) => ({
  /* 채팅 목록 */
  chats: [],
  /* 현재 채팅 정보 */
  curChat: null,
  /* 채팅 모델 목록 */
  chatModels: [],
  /* 새 채팅 여부 */
  isNewChat: false,
  /* 새 채팅 모델 id */
  newChatModel: '',
  /* 메시지 입력 가능 여부 */
  isAvailable: true,

  setChats: async () => {
    const response = await fetch('/chats', { method: 'GET' }).then((res) => res.json());
    set({ chats: response.data });
  },
  setCurChat: (item) => set({ curChat: item }),
  setChatModels: async () => {
    const response = await fetch('/chat_model').then((res) => res.json());
    set({ chatModels: response.data });
  },
  setIsNewChat: (state: boolean) => set({ isNewChat: state }),
  setIsAvailable: (state: boolean) => set({ isAvailable: !state }),
  setNewChatModel: (id: string) => set({ newChatModel: id }),
}));

export { useChatStore };
