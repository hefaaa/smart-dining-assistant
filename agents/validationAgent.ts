import { menu } from "@/data/menu";

export function validationAgent(
itemId:string
){

const item =
menu.find(
i => i.id === itemId
);

return {

valid:
item?.available ?? false

};

}