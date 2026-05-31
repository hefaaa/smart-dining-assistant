"use client";

import { categories } from "@/data/menu";

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

export default function MenuTabs({
  selected,
  onSelect,
}: Props) {

  return (

    <div className="flex gap-3 overflow-x-auto pb-2">

      {categories.map((cat) => (

        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`
            min-w-[120px]
            px-5
            py-3
            rounded-xl
            border
            transition-all
            duration-200
            font-medium

            ${
              selected === cat
                ? "bg-emerald-800 text-white border-emerald-900 shadow-md"
                : "bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700"
            }
          `}
        >

          {cat}

        </button>

      ))}

    </div>

  );

}