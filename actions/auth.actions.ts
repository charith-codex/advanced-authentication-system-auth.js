"use server";

import { LoginSchema, RegisterSchema } from "@/schemas";
import { z } from "zod";

// login action
export const login = async (values: z.infer<typeof LoginSchema>) => {
  // validate fields from backend
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};

// register action
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // validate fields from backend
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
