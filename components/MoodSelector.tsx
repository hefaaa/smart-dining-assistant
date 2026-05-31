"use client";

import {
useMoodStore
}
from "@/store/moodStore";

const moods = [

  "Spicy",

  "Light",

  "Sweet",

  "Filling",

  "Surprise Me",

];

export default function MoodSelector() {

  const mood =
    useMoodStore(
      (state) =>
        state.mood
    );

  const setMood =
    useMoodStore(
      (state) =>
        state.setMood
    );

  return (

    <div className="flex gap-3 flex-wrap">

      {moods.map(
        (item) => (

          <button
            key={item}
            onClick={() =>
              setMood(item)
            }
            className={`

            px-4
            py-2
            rounded-full
            border

            ${
              mood === item

              ?

              "bg-orange-600 text-white"

              :

              "bg-white"

            }

            `}
          >

            {item}

          </button>

        )
      )}

    </div>

  );

}