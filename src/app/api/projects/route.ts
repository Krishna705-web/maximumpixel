import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    // Attempt DB query, fallback to static data if table empty
    let dbProjects = await prisma.project.findMany({
      where: category && category.toUpperCase() !== "ALL"
        ? { category: { equals: category } }
        : undefined,
      orderBy: { createdAt: "desc" },
    });

    if (dbProjects.length === 0) {
      const filtered = category && category.toUpperCase() !== "ALL"
        ? PROJECTS.filter((p) => p.category.toLowerCase() === category.toLowerCase())
        : PROJECTS;
      return NextResponse.json({ success: true, projects: filtered, source: "static" });
    }

    return NextResponse.json({ success: true, projects: dbProjects, source: "database" });
  } catch (error) {
    console.error("API /api/projects error:", error);
    return NextResponse.json(
      { success: true, projects: PROJECTS, source: "fallback" },
      { status: 200 }
    );
  }
}
