import { nluAgent } from "./nluAgent";
import { recommendationAgent } from "./recommendationAgent";
import { upsellAgent } from "./upsellAgent";
import { getSession } from "./memoryAgent";
import { sentimentAgent } from "./sentimentAgent";

export async function orchestrator(
  message:string,
  tableId:string
){
  

const nlu =
await nluAgent(message);

const session = getSession(tableId);

if (nlu.preferences?.length) {
  session.preferences = [
    ...new Set([
      ...session.preferences,
      ...nlu.preferences
    ])
  ];
}

const recommendation =
await recommendationAgent(
  nlu,
  session.preferences
);
const sentiment =
await sentimentAgent(message);

const upsell =
await upsellAgent(
recommendation
);

return {

trace:[
"NLU Agent",
"Memory Agent",
"Recommendation Agent",
"Upsell Agent"
],
sentiment,
recommendation,
upsell

};

}