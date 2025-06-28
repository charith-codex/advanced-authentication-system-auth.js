"use server";

import { currentRole } from "@/lib/auth-session";
import { UserRole } from "@/lib/generated/prisma";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "Allowed server action!" };
  }
  return { error: "Forbidden server action!" };
};
