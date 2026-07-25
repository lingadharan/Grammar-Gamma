import { GoogleGenAI } from '@google/genai';
import { Router, type Request, type Response } from 'express';
import { chatController } from '../controller/chatController.js';

const route = Router();

const chat = new chatController();

route.get('/get', (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: 'Worked!!!',
  });
});

route.get('/chat', (req: Request, res: Response) =>
  chat.geminiAIResponse(req, res)
);

export default route;
