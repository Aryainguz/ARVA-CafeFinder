import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const GOOGLE_PLACE_API_KEY = process.env.GOOGLE_PLACE_KEY;

export async function GET(request: Request) {
  const { searchParams }: URL = new URL(request.url);
  const q = searchParams.get("q");

  const res = await fetch(
    `${BASE_URL}?query=${q}&key=${GOOGLE_PLACE_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();


  return NextResponse.json({
    data,
  });
}
