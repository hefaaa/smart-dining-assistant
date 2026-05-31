import { create } from "zustand";

type MoodStore = {

  mood: string;

  setMood: (
    mood: string
  ) => void;

};

export const useMoodStore =
create<MoodStore>(
(set)=>({

mood:"",

setMood:(mood)=>{

if(
typeof window !==
"undefined"
){

sessionStorage.setItem(
"mood",
mood
);

}

set({
mood
});

}

})
);