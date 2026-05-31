import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {

  const body =
    await req.json();

  const order = {

    id:
      "ORD-" +
      Date.now(),

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

    createdAt:
      new Date(),

  };

  return NextResponse.json(
    order
  );

}