
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { getProducts } from '../constants';

const getSystemInstruction = () => {
  // Use English products for the AI context
  const productContext = getProducts('en').map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "Nova", a warm, organic lifestyle tech brand. 
  Your tone is calm, inviting, grounded, and sophisticated. Avoid overly "techy" jargon; prefer words like "natural", "seamless", "warm", and "texture".
  
  Here is our current product catalog:
  ${productContext}
  
  Answer customer questions about specifications, recommendations, and brand philosophy.
  Keep answers concise (under 3 sentences usually) to fit the chat UI. 
  If asked about products not in the list, gently steer them back to Nova products.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    if (!apiKey) {
      console.error("Gemini API Error: Missing VITE_GEMINI_API_KEY");
      return "The concierge is offline until a valid API key is configured.";
    }
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I am listening, but I cannot speak right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    const raw: any = error;
    const msg = typeof raw?.message === 'string' ? raw.message : '';
    const serverMsg = typeof raw?.error?.message === 'string' ? raw.error.message : '';
    const combined = (serverMsg || msg || '').toLowerCase();
    if (combined.includes('api key not valid') || combined.includes('api_key_invalid')) {
      return "The concierge is offline due to an invalid API key. Please update the API key.";
    }
    return "I apologize, but I am having trouble connecting to the network. Please try again in a moment.";
  }
};
