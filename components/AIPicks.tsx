"use client";

import { menu } from "@/data/menu";
import { useRecommendationStore } from "@/store/recommendationStore";
import { useCartStore } from "@/store/cartStore";
import { getCurrentUser } from "@/lib/currentUser";
import { useMoodStore } from "@/store/moodStore";

export default function AIPicks() {

  const recommendations =
    useRecommendationStore(
      (state) => state.items
    );

  const mood =
    useMoodStore(
      (state) => state.mood
    );

  const addItem =
    useCartStore(
      (state) => state.addItem
    );

  let items: typeof menu = [];

  if (
    recommendations.length > 0
  ) {

    items =
      menu.filter(
        (item) =>
          recommendations.includes(
            item.name
          ) ||
          recommendations.includes(
            item.id
          )
      );

  } else {

    switch (mood) {

      case "Spicy":

        items =
          menu.filter(
            (item) =>
              item.tags.includes(
                "spicy"
              )
          );

        break;

      case "Sweet":

        items =
          menu.filter(
            (item) =>
              item.category ===
              "Desserts"
          );

        break;

      case "Light":

        items =
          menu.filter(
            (item) =>
              item.tags.includes(
                "light"
              )
          );

        break;

      case "Filling":

        items =
          menu.filter(
            (item) =>
              item.price > 250
          );

        break;

      case "Surprise Me":

        items =
          [...menu]
            .sort(
              () =>
                Math.random() - 0.5
            )
            .slice(0, 3);

        break;

      default:

        items = [];

    }

  }

  if (
    items.length === 0
  ) {

    return (

      <div className="bg-white rounded-xl shadow-lg p-5">

        <h2 className="text-2xl mb-4">

          AI Picks For You

        </h2>

        <p className="text-gray-500">

          Select a mood or ask Zara for recommendations.

        </p>

      </div>

    );

  }

  return (

    <div className="bg-white rounded-xl shadow-lg p-5">

      <h2 className="text-2xl mb-4">

        AI Picks For You

      </h2>

      <div className="grid grid-cols-3 gap-4">

        {items.map((item) => (

          <div
            key={item.id}
            className="border rounded-xl p-4 bg-emerald-50"
          >

            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-32 object-cover rounded"
            />

            <h3 className="font-bold mt-3">

              {item.name}

            </h3>

            <p className="text-sm text-gray-600 mt-1">

              {item.description}

            </p>

            <p className="font-semibold mt-2">

              ₹{item.price}

            </p>

            <button
              className="mt-3 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
              onClick={() => {

                const user =
                  getCurrentUser();

                addItem({

                  id: item.id,

                  name: item.name,

                  price: item.price,

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

        ))}

      </div>

    </div>

  );

}