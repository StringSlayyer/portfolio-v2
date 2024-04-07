import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  return NextResponse.json("Hello from API!");
}
