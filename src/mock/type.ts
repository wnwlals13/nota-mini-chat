/* 채팅 생성 Type */
export interface AddChatParams {}

export interface AddChatRequestBody {
  chat_model_id: string;
}
export interface AddChatResponseBody {}

/* 단일 채팅 Type */
export interface ChatParams {
  chatId: string;
}
export interface FetchChatRequestBody {}

export interface FetchChatResponseBody {
  data: any;
}

export interface AddMsgRequestBody {
  prompt: string;
}

export interface AddMsgResponseBody {
  data: Record<string, any>;
}
