"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useCartStore } from "@/store/cartStore";
import CheckoutModal from "./CheckoutModal";

export default function CartDrawer() {

  const router = useRouter();

  const [openCheckout, setOpenCheckout] =
    useState(false);

  const [notification, setNotification] =
    useState("");

  const cart =
    useCartStore(
      (state) => state.cart
    );

  const removeItem =
    useCartStore(
      (state) => state.removeItem
    );

  const increaseQuantity =
    useCartStore(
      (state) =>
        state.increaseQuantity
    );

  const decreaseQuantity =
    useCartStore(
      (state) =>
        state.decreaseQuantity
    );

  const updateInstructions =
    useCartStore(
      (state) =>
        state.updateInstructions
    );
  const setCart =
  useCartStore(
    (state) =>
      state.setCart
  );

  const subtotal =
    useCartStore(
      (state) =>
        state.getSubtotal()
    );

  const gst =
    useCartStore(
      (state) =>
        state.getGST()
    );

  const grandTotal =
    useCartStore(
      (state) =>
        state.getGrandTotal()
    );
  
 useEffect(() => {

  const tableId =
    window.location.pathname
      .split("/")
      .pop();

  const cartKey =
    `sharedCart-${tableId}`;

  const stored =
    localStorage.getItem(
      cartKey
    );

  if (stored) {

    setCart(
      JSON.parse(stored)
    );

  } else {

    setCart([]);

  }

  function syncCart(
    event: StorageEvent
  ) {

    if (
      event.key !== cartKey
    ) {
      return;
    }

    const updated =
      localStorage.getItem(
        cartKey
      );

    if (!updated) {

      setCart([]);

      return;

    }

    setCart(
      JSON.parse(updated)
    );

    setNotification(
      "🟢 Cart updated by another diner"
    );

    setTimeout(() => {

      setNotification("");

    }, 3000);

  }

  window.addEventListener(
    "storage",
    syncCart
  );

  return () => {

    window.removeEventListener(
      "storage",
      syncCart
    );

  };

}, [setCart]);



  return (

    <div className="bg-white rounded-xl shadow-lg p-5 sticky top-5">

      <h2 className="text-2xl font-bold mb-4">

        🛒 Shared Table Cart

      </h2>

      {notification && (

        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">

          {notification}

        </div>

      )}

      {cart.length === 0 && (

        <div className="text-gray-500">

          Cart is empty

        </div>

      )}

      {cart.map((item) => (

        <div
          key={item.id}
          className="border-b pb-4 mb-4"
        >

          <div className="flex justify-between">

            <div>

              <h3 className="font-bold">

                {item.name}

              </h3>

              <p>

                ₹{item.price}

              </p>

              <div className="flex items-center gap-2 mt-2">

                <div
                  className="
                  w-8
                  h-8
                  rounded-full
                  bg-blue-700
                  text-white
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-bold
                "
                >

                  {item.ownerAvatar}

                </div>

                <span className="text-sm text-gray-500">

                  Added by {item.ownerName}

                </span>

              </div>

            </div>

            <button
              className="text-red-500"
              onClick={() =>
                removeItem(
                  item.id
                )
              }
            >

              Remove

            </button>

          </div>

          <div className="flex items-center gap-3 mt-3">

            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={() =>
                decreaseQuantity(
                  item.id
                )
              }
            >
              -
            </button>

            <span>

              {item.quantity}

            </span>

            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={() =>
                increaseQuantity(
                  item.id
                )
              }
            >
              +
            </button>

          </div>

          <div className="mt-3">

            <textarea
              placeholder="Special instructions..."
              value={
                item.instructions || ""
              }
              onChange={(e) =>
                updateInstructions(
                  item.id,
                  e.target.value
                )
              }
              className="w-full border rounded p-2"
              rows={2}
            />

          </div>

          <div className="mt-2 text-sm text-gray-500">

            Item Total:

            ₹

            {(
              item.price *
              item.quantity
            ).toFixed(2)}

          </div>

        </div>

      ))}

      {cart.length > 0 && (

        <>

          <div className="mt-5 space-y-2">

            <div className="flex justify-between">

              <span>

                Subtotal

              </span>

              <span>

                ₹
                {subtotal.toFixed(
                  2
                )}

              </span>

            </div>

            <div className="flex justify-between">

              <span>

                GST

              </span>

              <span>

                ₹
                {gst.toFixed(
                  2
                )}

              </span>

            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">

              <span>

                Grand Total

              </span>

              <span>

                ₹
                {grandTotal.toFixed(
                  2
                )}

              </span>

            </div>

          </div>

          <button
            onClick={() =>
              setOpenCheckout(
                true
              )
            }
            className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg"
          >

            Place Order

          </button>

        </>

      )}

      <CheckoutModal
        open={
          openCheckout
        }
        onClose={() =>
          setOpenCheckout(
            false
          )
        }
        onSuccess={() => {

          router.push(
            "/order-success"
          );

        }}
      />

    </div>

  );

}