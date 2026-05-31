"use client";

import { useState } from "react";
import { useRecommendationStore } from "@/store/recommendationStore";

export default function AIChat() {

  const [message, setMessage] =
    useState("");

  const [response, setResponse] =
useState<{
  recommendation?: any;
  upsell?: any;
  trace?: string[];
} | null>(null);
  const [loading, setLoading] =
    useState(false);

  const setItems =
    useRecommendationStore(
      (state) => state.setItems
    );

  async function sendMessage() {

    if (!message.trim()) return;

    setLoading(true);

    try {

      const res =
        await fetch("/api/chat", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            tableId: "T1",
            message,
          }),

        });

      const data =
        await res.json();

      console.log(
        "AI Response:",
        data
      );

      setResponse(
        data.reply
      );

      setItems(
        data.reply
          ?.recommendation
          ?.recommendedItems || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-white rounded-xl shadow-lg p-4">

      <div className="flex gap-3">

        <input
          value={message}
          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }
          placeholder="Tell me what you'd like..."
          className="flex-1 border p-3 rounded-lg"
        />

        <button
          onClick={sendMessage}
          className="bg-orange-600 text-white px-5 py-3 rounded-lg"
        >

          {loading
            ? "Thinking..."
            : "Ask Zara"}

        </button>

      </div>

      {response && (

        <div className="mt-6 space-y-4">

          {/* Recommendation */}

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded">

            <h3 className="text-xl font-semibold mb-2">

              Chef's Recommendation

            </h3>

            {response
              ?.recommendation
              ?.recommendedItems
              ?.map(
                (
                  item: string
                ) => (

                  <div
                    key={item}
                    className="mb-2 font-semibold"
                  >

                    🍽 {item}

                  </div>

                )
              )}

            <p className="mt-3 italic">

              {
                response
                  ?.recommendation
                  ?.reason
              }

            </p>

          </div>

          {/* Upsell */}

          {response
            ?.upsell
            ?.upsell && (

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">

              <h3 className="font-bold text-lg">

                Perfect Pairing ✨

              </h3>

              <p className="mt-2">

                {
                  response
                    .upsell
                    .upsell
                }

              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );

}