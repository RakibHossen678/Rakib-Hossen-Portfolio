import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const projectsCollection = db.collection("projects");
  try {
    const projects = await projectsCollection.find().toArray();
    return NextResponse.json({ projects });
  } catch (error) {
    console.log(error);
  }
};
