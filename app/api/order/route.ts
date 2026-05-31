import { NextRequest, NextResponse } from "next/server";
import WebSocket from "ws";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest
) {

  const body =
    await req.json();

  const order =
    await prisma.order.create({

      data: {

        tableId:
          body.tableId,

        customerName:
          body.customerName,

        phone:
          body.phone,

        total:
          body.total,

        status:
          "PENDING",

      },

    });

  try {

    const ws =
      new WebSocket(
        "ws://localhost:3001"
      );

    ws.on("open", () => {

      ws.send(
        JSON.stringify(order)
      );

      ws.close();

    });

  } catch (error) {

    console.log(
      "WebSocket Error:",
      error
    );

  }

  return NextResponse.json(
    order
  );

}

  