import { currentRole } from "@/lib/auth-session";
import { UserRole } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return new NextResponse(null, {
      status: 200,
    });
  }

  return new NextResponse(null, {
    status: 403,
  });
}
