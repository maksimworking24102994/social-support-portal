import { http } from "@/api/http";
import { env } from "@/config";

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const response = await http.post("/chat/completions", {
      model: env.OPENAI_MODEL,
      messages: [{ role: "user", content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating text:", error);
    throw new Error("Failed to generate text");
  }
};
