"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function CheckoutModal({
  open,
  onClose,
  onSuccess,
}: Props) {

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpSent, setOtpSent] =
    useState(false);

  const [verified, setVerified] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const grandTotal =
    useCartStore(
      (state) =>
        state.getGrandTotal()
    );

  if (!open) return null;

  function sendOtp() {

    alert(
      "Demo OTP: 123456"
    );

    setOtpSent(true);

  }

  function verifyOtp() {

    if (otp === "123456") {

      setVerified(true);

      alert(
        "OTP Verified"
      );

    } else {

      alert(
        "Invalid OTP"
      );

    }

  }

  async function placeOrder() {

    try {

      setLoading(true);

      const response =
        await fetch(
          "/api/order",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              tableId: "{tableId}",

              customerName: name,

              phone,

              total: grandTotal,

            }),

          }
        );

      if (!response.ok) {

        throw new Error(
          "Order creation failed"
        );

      }

      const order =
        await response.json();

      console.log(
        "Order Created:",
        order
      );

      onSuccess();

    } catch (error) {

      console.error(error);

      alert(
        "Failed to place order"
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-[450px] shadow-xl">

        <h2 className="text-2xl font-bold mb-4">

          Checkout

        </h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="border p-3 w-full rounded mb-3"
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
          className="border p-3 w-full rounded mb-3"
        />

        <div className="mb-4">

          <p className="font-semibold">

            Grand Total:

            ₹
            {grandTotal.toFixed(
              2
            )}

          </p>

        </div>

        {!otpSent && (

          <button
            onClick={sendOtp}
            className="w-full bg-orange-600 text-white p-3 rounded"
          >
            Send OTP
          </button>

        )}

        {otpSent && (

          <>

            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
              className="border p-3 w-full rounded mb-3 mt-3"
            />

            {!verified && (

              <button
                onClick={verifyOtp}
                className="w-full bg-emerald-600 text-white p-3 rounded"
              >
                Verify OTP
              </button>

            )}

          </>

        )}

        {verified && (

          <button
            onClick={placeOrder}
            disabled={loading}
            className="mt-4 w-full bg-blue-700 text-white p-3 rounded"
          >

            {loading
              ? "Placing Order..."
              : "Place Order"}

          </button>

        )}

        <button
          onClick={onClose}
          className="mt-3 w-full border p-3 rounded"
        >
          Cancel
        </button>

      </div>

    </div>

  );
}