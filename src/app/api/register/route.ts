import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/app/libs/mongodb";
import User from "@/app/models/user.model";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      hashedPassword: password, // Will be hashed by the pre-save hook
      favoriteIds: [],
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.error('Registration error:', error);
    return new NextResponse(error.message || "Internal Error", { status: 500 });
  }
}
