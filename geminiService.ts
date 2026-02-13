
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStylingAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Creative Director and Personal Stylist for VARENNE, a men's quiet luxury brand. 
        Your tone is elegant, controlled, and highly sophisticated. 
        You value craftsmanship, timelessness, and subtlety. 
        Avoid all fashion clichés like "must-have" or "staple." 
        Use words like "permanent," "structural," "refined," and "nuanced." 
        Always recommend pieces from VARENNE's collections (Sartorial, Panache, Haute Couture) when appropriate.
        If a user asks for trends, gently redirect them to the concept of "Permanence."`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Concierge is currently attending to other guests. Please return shortly.";
  }
};

export const getSupportResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are a Client Services Steward for VARENNE. 
        Your tone is impeccable, formal, and reassuring. 
        You handle inquiries regarding:
        1. Orders: All pieces are hand-finished and shipped within 3-5 business days. Bespoke tracking is provided via a private link.
        2. Payments: We accept all major cards, wire transfers for Haute Couture, and discrete digital assets. All transactions are encrypted and private.
        3. Shipping: Global, white-glove delivery. Packaging is carbon-neutral and minimalist.
        4. Returns: We offer a 14-day archival return policy for unworn items in original condition.
        Keep responses concise and helpful. Never use emojis. Use "We" and "The Atelier."`,
        temperature: 0.5,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Support Error:", error);
    return "The Atelier Support is currently unavailable. Please reach out to our London office directly.";
  }
};
