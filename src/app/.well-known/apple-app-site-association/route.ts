import { NextResponse } from "next/server";

const TEAM_ID = process.env.APPLE_TEAM_ID ?? "Payton Sides";
const BUNDLE_ID = process.env.APPLE_BUNDLE_ID ?? "PaytonSides.Sides-CRM";

export function GET() {
  const body = {
    webcredentials: {
      apps: [`${TEAM_ID}.${BUNDLE_ID}`],
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
