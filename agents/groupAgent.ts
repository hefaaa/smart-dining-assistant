export function groupAgent(
  cart:any[]
){

const vegCount =
cart.filter(
i => i.tags?.includes("veg")
).length;

const nonVegCount =
cart.length - vegCount;

return {

vegCount,
nonVegCount,

suggestion:
"Consider sharing platters."

};

}