import type { IUserChat } from '../model/userChat.js';
import userChat from '../model/userChat.js';

export class ChatRepository {
  async addUserChat(chat: IUserChat): Promise<IUserChat> {
    return await userChat.insertOne(chat);
  }
}
