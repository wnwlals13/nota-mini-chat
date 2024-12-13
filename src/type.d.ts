export interface Chat extends ChatModel {
  /* 생성한 채팅 uuid */
  chat_id: string;
  /* 채팅 내역 배열 */
  dialogues: Dialogue[];
}

export interface Dialogue {
  /* 채팅 쌍의 id */
  dialogue_id: string;
  /* 질문 */
  prompt: string;
  /* 답변 */
  completion: string;
}

export interface ChatModel {
  /* 채팅 모델 uuid */
  chat_model_id: string;
  /* 채팅 모델명 */
  chat_model_name: string;
}
