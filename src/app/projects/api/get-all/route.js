import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const projectsCollection = db.collection("projects");
  try {
    const projects = await projectsCollection.find().toArray();
    return Response.json({ projects });
  } catch (error) {
    console.log(error);
  }
};
