import { groq } from "@/lib/groq";
import { menu } from "@/data/menu";

export async function recommendationAgent(
  nlu: any,
  preferences: string[]
) {

  let filteredMenu = menu;

  const isVegetarian =
    preferences.some(
      (p) =>
        p.toLowerCase().includes("veg") ||
        p.toLowerCase().includes("vegetarian")
    );

  if (isVegetarian) {

    filteredMenu =
      menu.filter(
        (item) =>
          item.tags.includes("veg")
      );

  }

  const completion =
    await groq.chat.completions.create({

      model: "llama-3.3-70b-versatile",

      messages: [

        {
          role: "system",

          content:  `
You are Zara, a witty and knowledgeable dining assistant.

Your job is to suggest menu items based on the user's preferences.

Current context:

- Time of day: ${new Date().getHours() < 12
  ? "Breakfast"
  : new Date().getHours() < 17
  ? "Lunch"
  : "Dinner"}

- User preferences:
${JSON.stringify(preferences)}

- Current cart:
${JSON.stringify([])}

- Available menu items:
${JSON.stringify(filteredMenu)}

Rules:

- Suggest at most 3 items

- Each suggestion must include:
  itemId,
  name,
  price,
  reason

- Never suggest items already in the cart
- Never mention items not in the provided menu list
- Never give any items in pairings that is not in the provided menu list
- Respond in the same language/mix the user used

- Be warm and brief

- Maximum 2 sentences before the item list

IMPORTANT:
recommendedItems MUST contain menu item NAMES.

Correct:
["Paneer Tikka","Veg Biryani"]

Wrong:
["VS1","VM1"]

If preferences contain:
"veg" or "vegetarian"

ONLY recommend menu items
whose tags include "veg" even in future response.

Return STRICT JSON ONLY:


{
  "recommendedItems":[
    "Paneer Tikka",
    "Veg Biryani",
    "Butter Naan"
  ],
  "reason":"Why these items were selected"
}

`
        },

        {
          role: "user",
          content:
            JSON.stringify(nlu)
        }

      ],

      temperature: 0.4

    });

  const content =
    completion
      .choices[0]
      .message
      .content || "{}";

  try {
    

    return JSON.parse(

      content
        .replace(
          /```json/gi,
          ""
        )
        .replace(
          /```/g,
          ""
        )
        .trim()

    );

  } catch {

    return {

      recommendedItems: [],

      reason:
        "Unable to generate recommendations."

    };

  }

}