
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIExplanation = async (code: string, topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful HTML tutor. The student is working on the topic: "${topic}". 
      Here is their current code: 
      \`\`\`html
      ${code}
      \`\`\`
      Explain what this code does simply, and suggest one improvement or next step. Keep the response under 150 words.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I couldn't process your request right now. Try checking your HTML syntax!";
  }
};
