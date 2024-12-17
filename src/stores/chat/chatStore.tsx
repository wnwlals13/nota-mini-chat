import { create } from 'zustand';
import { IChatStore } from './type';

const useChatStore = create<IChatStore>((set) => ({
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
  /* 답변 완료 여부 */
  isComplete: true,

  setCurChat: (item) => set({ curChat: item }),
  setIsNewChat: (state: boolean) => set({ isNewChat: state }),
  setIsAvailable: (state: boolean) => set({ isAvailable: !state }),
  setNewChatModel: (id: string) => set({ newChatModel: id }),
  setIsComplete: (state: boolean) => set({ isComplete: state }),
}));

export { useChatStore };
