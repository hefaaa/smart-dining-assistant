"use client";

import { useEffect, useState } from "react";

export default function KitchenPage() {

  const [orders, setOrders] =
    useState<any[]>([]);

  useEffect(() => {

    const ws =
      new WebSocket(
        "ws://localhost:3001"
      );

    ws.onmessage =
      (event) => {

        const order =
          JSON.parse(
            event.data
          );

        setOrders(
          (prev) => [
            order,
            ...prev,
          ]
        );

      };

    return () =>
      ws.close();

  }, []);

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-6">
        Kitchen Dashboard
      </h1>

      {orders.map(
        (order, index) => (

          <div
            key={index}
            className="border p-4 mb-4 rounded"
          >

            <p>
              Order:
              {order.id}
            </p>

            <p>
              Customer:
              {order.customerName}
            </p>

            <p>
              Status:
              {order.status}
            </p>

          </div>

        )
      )}

    </div>

  );
}