import { groq } from "@/lib/groq";
import { menu } from "@/data/menu";

export async function upsellAgent(
  recommendations: any
){

const completion =
await groq.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"system",
content:`
ONLY suggest items from this menu:

${JSON.stringify(menu)}

Return ONLY the exact item name.

Never invent menu items.
Never invent IDs.
return:

{
  "upsell":".."
}


`
},
{
role:"user",
content: JSON.stringify(
 recommendations
)
}
]
});

const content =
completion.choices[0].message.content || "{}";

return JSON.parse(
content.replace(/```json|```/g,"").trim()
);

}