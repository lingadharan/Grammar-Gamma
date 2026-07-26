import { ApiResponse } from './api';

export interface ChatHistoryRecord {
  _id: string;
  request: string;
  response: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type GetChatHistoryResponse = ApiResponse<ChatHistoryRecord[]>;
