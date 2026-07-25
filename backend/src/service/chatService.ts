import { type GenerateContentResponse, GoogleGenAI } from '@google/genai';
import env from '../env/env.js';
import { ChatRepository } from '../repository/chatRepository.js';
import type { IUserChat } from '../model/userChat.js';

export class chatService {
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
