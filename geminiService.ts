
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
