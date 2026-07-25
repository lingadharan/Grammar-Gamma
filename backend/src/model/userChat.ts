import mongoose, { Schema } from 'mongoose';

export interface IUserChat {
  request: string;
  response: string;
}

const userChatSchem = new Schema<IUserChat>(
  {
    request: {
      type: String,
      require: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userChat = mongoose.model<IUserChat>('Chat', userChatSchem);

export default userChat;
