import { getPinnedProjects } from "@/services/projects/projects.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getPinnedProjects();
    return NextResponse.json(data.data.user.pinnedItems.nodes);
  } catch {
    return NextResponse.json([]);
  }
}
