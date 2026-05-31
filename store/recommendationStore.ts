import { create } from "zustand";

type RecommendationStore = {

  items: string[];

  setItems: (
    items: string[]
  ) => void;

};

export const useRecommendationStore =
create<RecommendationStore>(
(set)=>({

items: [],

setItems: (items)=>
set({
items
})

})
);