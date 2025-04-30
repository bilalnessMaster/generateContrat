import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

// POST /api/seed-user
export async function GET() {
  try {


    const user = await prisma.user.create({
      data: {
        name: "Yassine",
        email: "yassine@example.com",
        image: "https://i.pravatar.cc/300?u=yassine",
        password: "yassine@example.com",
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Error inserting user:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
