"use server";

import { prisma } from "@/lib/prisma";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all fields." };
  }

  try {
    await prisma.message.create({
      data: { name, email, message },
    });
    return { success: true };
  } catch (error) {
    console.error("SUPABASE ERROR:", error);
    return { success: false, error: "Failed to submit message." };
  }
}