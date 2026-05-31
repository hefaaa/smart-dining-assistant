"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrackOrderPage() {

  const params = useParams();

  const orderId =
    params.orderId as string;

  const [status, setStatus] =
    useState("PENDING");

  useEffect(() => {

    const timer1 =
      setTimeout(() => {
        setStatus(
          "PREPARING"
        );
      }, 5000);

    const timer2 =
      setTimeout(() => {
        setStatus(
          "READY"
        );
      }, 10000);

    return () => {

      clearTimeout(timer1);
      clearTimeout(timer2);

    };

  }, []);

  return (

    <div className="max-h-[70vh] overflow-y-auto">

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-800">

          Track Order

        </h1>

        <p className="mt-4 text-lg">

          Order ID:

          <span className="font-bold ml-2">

            {orderId}

          </span>

        </p>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold">

            Current Status

          </h2>

          <div className="mt-4 text-3xl font-bold text-emerald-600">

            {status}

          </div>

        </div>

        <div className="mt-8">

          <div className="flex justify-between">

            <div
              className={
                status === "PENDING" ||
                status === "PREPARING" ||
                status === "READY"
                  ? "font-bold text-green-600"
                  : ""
              }
            >
              Order Received
            </div>

            <div
              className={
                status === "PREPARING" ||
                status === "READY"
                  ? "font-bold text-green-600"
                  : ""
              }
            >
              Preparing
            </div>

            <div
              className={
                status === "READY"
                  ? "font-bold text-green-600"
                  : ""
              }
            >
              Ready
            </div>

          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full mt-4">

            <div
              className={
                status === "PENDING"
                  ? "bg-orange-500 h-3 rounded-full w-1/3"
                  : status === "PREPARING"
                  ? "bg-blue-500 h-3 rounded-full w-2/3"
                  : "bg-green-500 h-3 rounded-full w-full"
              }
            />

          </div>

        </div>

        <div className="mt-8">

          <p>

            Estimated Wait Time:

            <span className="font-bold ml-2">

              15 Minutes

            </span>

          </p>

        </div>

      </div>

    </div>

  );

}