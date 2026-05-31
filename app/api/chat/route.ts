import { NextResponse } from "next/server";
import { orchestrator } from "@/agents/orchestrator";

export async function POST(
  req: Request
) {

  const body =
    await req.json();

  const reply =
    await orchestrator(
      body.message,
      body.tableId || "T1"
    );

  return NextResponse.json({
    reply
  });
}