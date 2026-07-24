import type { IChatRequestDTO } from "../dto/chatRequestDTO.js";
import { type Request, type Response } from "express";
import { chatService } from "../service/chatService.js";

export class chatController {
  async geminiAIResponse(req: Request, res: Response): Promise<any> {
    try {

      const { prompt } = req.body as IChatRequestDTO
      if (!prompt) {
        return res.status(400).json({
          success: false,
          message: 'Prompt is required.'
        })
      }

      const service = new chatService();

      const result: string | undefined = await service.geminiAIResponse(prompt)

      return res.status(200).json({
        success: true,
        data: result
      })
    }
    catch (error: unknown) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error as string
      })
    }
  }
}