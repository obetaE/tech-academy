import { connectMongoDB } from "@/libs/config/db";
import CourseModel from "@/libs/models/CourseModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const courseData = await req.json();
    await connectMongoDB();

    const newCourse = await CourseModel.create({
      ...courseData,
      students: 0,
      rating: 0,
      createdAt: new Date()
    });

    return NextResponse.json(
      { 
        message: "Course created successfully", 
        course: newCourse 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { 
        message: "Error creating course", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const courses = await CourseModel.find().sort({ createdAt: -1 });
    
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        message: "Error fetching courses", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { ids } = await req.json();
    await connectMongoDB();
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Invalid course IDs provided" },
        { status: 400 }
      );
    }

    const result = await CourseModel.deleteMany({ _id: { $in: ids } });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No courses found to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        message: `${result.deletedCount} courses deleted successfully` 
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: "Error deleting courses", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}