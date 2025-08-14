// app/api/profile/route.js
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/config/db";
import UserModel from "@/libs/models/UserModel";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    
    if (!email) {
      return NextResponse.json(
        { message: "Email parameter is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const user = await UserModel.findOne({ email: email.toLowerCase() })
      .select("-password -__v -createdAt -updatedAt");
    
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching profile", error: error.message },
      { status: 500 }
    );
  }
}