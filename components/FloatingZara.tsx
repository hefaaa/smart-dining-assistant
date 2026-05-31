"use client";

import { useState } from "react";
import AIChat from "./AIChat";

export default function FloatingZara() {

  const [open, setOpen] =
    useState(false);

  return (

    <>

      {!open && (

        <button
          onClick={() =>
            setOpen(true)
          }
          className="
          fixed
          bottom-6
          right-6
          bg-orange-600
          text-white
          px-5
          py-4
          rounded-full
          shadow-xl
          z-50
          hover:scale-105
          transition
          "
        >

          💬 Zara

        </button>

      )}

      {open && (

        <div
          className="
          fixed
          bottom-6
          right-6
          w-[450px]
          max-w-[95vw]
          z-50
          "
        >

          <div
            className="
            bg-white
            rounded-2xl
            shadow-2xl
            border
            max-h-[85vh]
            flex
            flex-col
            "
          >

            <div
              className="
              bg-gradient-to-r
              from-blue-700
              to-emerald-600
              text-white
              p-4
              flex
              justify-between
              items-center
              rounded-t-2xl
              "
            >

              <div>

                <h3 className="font-bold">

                  Zara AI Concierge

                </h3>

                <p className="text-xs">

                  Your dining assistant

                </p>

              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="text-xl"
              >

                ✕

              </button>

            </div>

            <div
              className="
              p-4
              overflow-y-auto
              flex-1
              "
            >

              <AIChat />

            </div>

          </div>

        </div>

      )}

    </>

  );

}