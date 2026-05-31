import { groq } from "@/lib/groq";

type NLUResponse = {
  intent: string;
  preferences: string[];
  language: string;
};

export async function nluAgent(
  message: string
): Promise<NLUResponse> {

  const completion =
    await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are a multilingual NLU agent.

Analyze the user's message.

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use code fences.
Do NOT explain anything.

Possible intents:

GREET
RECOMMEND
ADD_ITEM
CHECKOUT

Example:

{
  "intent":"RECOMMEND",
  "preferences":["spicy","light"],
  "language":"hinglish"
}
`
        },

        {
          role: "user",
          content: message
        }
      ],

      temperature: 0
    });

  const content =
    completion.choices[0].message.content || "{}";

  console.log("NLU RAW:", content);

  const cleaned = content
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {

    return JSON.parse(cleaned);

  } catch (error) {

    console.error("NLU Parse Error:", error);
    console.error("Received:", cleaned);

    return {
      intent: "RECOMMEND",
      preferences: [],
      language: "english"
    };
  }
}