import { type GenerateContentResponse, GoogleGenAI } from '@google/genai';
import env from '../env/env.js';
import { ChatRepository } from '../repository/chatRepository.js';
import type { IUserChat } from '../model/userChat.js';
import { NotFoundError } from '../error/error.js';

export class ChatService {
  async getChat(_id?: string): Promise<IUserChat | IUserChat[]> {
    const repository = new ChatRepository();
    if (_id) {
      const getChatByIDResponse = await repository.getChatByID(_id);
      if (!getChatByIDResponse) {
        throw new NotFoundError('Chat not found!');
      }
      return getChatByIDResponse;
    }
    const getAllChatResponse = await repository.getAllChat();
    if (getAllChatResponse.length === 0) {
      throw new NotFoundError('Chat not found!');
    }
    return getAllChatResponse;
  }

  async geminiAIResponse(prompt: string): Promise<IUserChat> {
    const ai = new GoogleGenAI({ apiKey: env.gemini_api_key });
    const response = await ai.interactions.create({
      input: prompt,
      model: 'gemini-3.6-flash',
    });

    const repository = new ChatRepository();

    const result: IUserChat = await repository.addUserChat({
      request: prompt,
      response: response.output_text!,
    });

    return result;
  }
}
