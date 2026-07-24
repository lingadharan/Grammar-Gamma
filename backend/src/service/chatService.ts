import { type GenerateContentResponse, GoogleGenAI } from "@google/genai";
import env from "../env/env.js";


export class chatService {
  async geminiAIResponse(prompt: string): Promise<string | undefined> {
    const ai = new GoogleGenAI({ apiKey: env.gemini_api_key });
    const response = await ai.interactions.create({
      input: prompt,
      model: 'gemini-3.6-flash'
    })
    console.log("response", response)
    return response.output_text
  }
} 