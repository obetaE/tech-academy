import { connectMongoDB } from "@/libs/config/db";
import CourseModel from "@/libs/models/CourseModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const course = await CourseModel.findById(id);

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { 
        message: "Error fetching course", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const updateData = await req.json();
    await connectMongoDB();

    const updatedCourse = await CourseModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        message: "Course updated successfully", 
        course: updatedCourse 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating course:", error);
    return NextResponse.json(
      { 
        message: "Error updating course", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const deletedCourse = await CourseModel.findByIdAndDelete(id);

    if (!deletedCourse) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        message: "Course deleted successfully",
        course: deletedCourse 
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: "Error deleting course", 
        error: error.message 
      },
      { status: 500 }
    );
  }
}