// agents/sentimentAgent.ts

import { groq } from "@/lib/groq";

export async function sentimentAgent(
  message: string
) {

  const completion =
    await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
Classify sentiment.

Return JSON only:

{
  "sentiment":"positive|neutral|frustrated|confused"
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

  return JSON.parse(
    content.replace(/```json|```/g, "").trim()
  );
}