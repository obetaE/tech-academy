import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/config/db";
import UserModel from "@/libs/models/UserModel";
import bcrypt from "bcryptjs";

// POST - Create new user
export async function POST(req) {
  try {
    const { name, email, password, isAdmin } = await req.json();
    
    await connectMongoDB();
    const existingUser = await UserModel.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      fullname: name.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      isAdmin: isAdmin || false,
      avatar: name.charAt(0).toUpperCase(),
      // Other default fields
      location: "",
      bio: "",
      courses: [],
      enrollments: [],
      stats: {},
      achievements: []
    });

    return NextResponse.json(
      { message: "Registration Successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}

// GET - Get all users (admin only)
export async function GET() {
  try {
    await connectMongoDB();
    const users = await UserModel.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching users", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete user by ID (admin only)
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const deletedUser = await UserModel.findByIdAndDelete(id);
    
    if (!deletedUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting user", error: error.message },
      { status: 500 }
    );
  }
}