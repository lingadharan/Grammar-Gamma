import type {
  IChatRequestDTO,
  IGetChatRquestDTO,
} from '../dto/chatRequestDTO.js';
import { type Request, type Response } from 'express';
import { ChatService } from '../service/chatService.js';
import type { IUserChat } from '../model/userChat.js';
import { NotFoundError } from '../error/error.js';

export class ChatController {
  async getChat(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.query as IGetChatRquestDTO;
      const service = new ChatService();
      const result = await service.getChat(_id);
      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: unknown) {
      if (error instanceof NotFoundError) {
        return res.status(error.statusCode).json({
          success: false,
          message: error.message,
        });
      }
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }

  async geminiAIResponse(req: Request, res: Response): Promise<Response> {
    try {
      const { prompt } = req.body as IChatRequestDTO;
      if (!prompt) {
        return res.status(400).json({
          success: false,
          message: 'Prompt is required.',
        });
      }

      const service = new ChatService();

      const result: IUserChat = await service.geminiAIResponse(prompt);

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: unknown) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error as string,
      });
    }
  }
}
