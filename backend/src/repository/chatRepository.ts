import type { IUserChat } from '../model/userChat.js';
import userChat from '../model/userChat.js';

export class ChatRepository {
  async addUserChat(chat: IUserChat): Promise<IUserChat> {
    return await userChat.insertOne(chat);
  }

  async getChatByID(_id: string): Promise<IUserChat | null> {
    return await userChat.findById(_id);
  }

  async getAllChat(): Promise<IUserChat[]> {
    return await userChat.find({});
  }
}
