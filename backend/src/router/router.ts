import { GoogleGenAI } from '@google/genai';
import { Router, type Request, type Response } from 'express';
import { ChatController } from '../controller/chatController.js';

const route = Router();

const chat = new ChatController();

route.post('/chat', (req: Request, res: Response) =>
  chat.geminiAIResponse(req, res)
);

route.get('/get-chat', (req: Request, res: Response) => chat.getChat(req, res));

export default route;
