"use client";

import { menu } from "@/data/menu";
import { useCartStore } from "@/store/cartStore";
import { getCurrentUser } from "@/lib/currentUser";

type Props = {
  category: string;
};

export default function MenuGrid({
  category,
}: Props) {

  const addItem =
    useCartStore(
      (state) =>
        state.addItem
    );

  const filtered =
    category === "All"
      ? menu
      : menu.filter(
          (item) =>
            item.category ===
            category
        );

  return (

    <div className="grid grid-cols-3 gap-4">

      {filtered.map(
        (item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-4"
          >

            <img
              src={
                item.image_url
              }
              alt={
                item.name
              }
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-3 font-bold">

              {item.name}

            </h3>

            <p>
              ₹{item.price}
            </p>

            <p className="text-sm mt-2">

              {
                item.description
              }

            </p>

            <button
              className="mt-3 bg-emerald-600 text-white px-4 py-2 rounded"
              onClick={() => {

                const user =
                  getCurrentUser();

                addItem({

                  id: item.id,

                  name:
                    item.name,

                  price:
                    item.price,

                  quantity: 1,

                  ownerName:
                    user.name,

                  ownerAvatar:
                    user.avatar,

                });

              }}
            >

              Add To Cart

            </button>

          </div>

        )
      )}

    </div>

  );

}