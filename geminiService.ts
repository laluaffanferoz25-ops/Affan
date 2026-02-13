
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStylingAdvice = async (query: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Creative Director for VARENNE. 
        Tone: Sophisticated, authoritative, extremely brief. 
        Philosophy: Quiet luxury, permanence over trends.
        Constraint: Max 2-3 sentences. No clichés. Direct advice only.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Concierge is momentarily unavailable.";
  }
};

export const getSupportResponse = async (query: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are VARENNE Client Services. 
        Tone: Impeccable, formal, direct. 
        Constraint: 1-2 sentences maximum. NO pleasantries (no "Hello", no "How can I help").
        Orders: Shipped 3-5 days. Tracking via private link.
        Payments: Major cards, wire, crypto. Encrypted.
        Returns: 14 days, unworn.
        Global white-glove delivery.`,
        temperature: 0.3,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Support Error:", error);
    return "Atelier support is currently offline.";
  }
};
