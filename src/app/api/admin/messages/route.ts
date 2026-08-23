import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function checkAdminAuth(request: NextRequest): boolean {
  const adminSecret = process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET;
  if (!adminSecret) {
    // If no admin secret is configured in production, block access safely
    return false;
  }

  const authHeader = request.headers.get("x-admin-key") || request.nextUrl.searchParams.get("key");
  if (!authHeader) return false;

  return authHeader === adminSecret;
}

export async function GET(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access" },
        { status: 401 }
      );
    }

    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Admin messages fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await request.json();
    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid or missing message ID" },
        { status: 400 }
      );
    }

    await prisma.message.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("Admin message delete error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete message" },
      { status: 500 }
    );
  }
}
