import { NextResponse } from "next/server";
import { users } from "@/lib/appwrite.config";
import { ID } from "node-appwrite";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const user = await users.create({
      userId: ID.unique(),
      name,
      email,
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
