// src/pages/api/newsletter/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type Data =
  | { success: true; message: string; data: unknown }
  | { success: false; message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { email, source } = req.body as {
      email?: string;
      source?: string;
    };

    if (!email || !email.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "กรุณากรอกอีเมล" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // เช็คว่าอีเมลนี้เคยสมัครแล้วหรือยัง
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "อีเมลนี้ได้สมัครรับข่าวสารไว้แล้ว",
      });
    }

    // บันทึกลงฐานข้อมูล
    const subscriber = await prisma.newsletterSubscriber.create({
      data: {
        email: normalizedEmail,
        source: source ?? "website",
      },
    });

    return res.status(201).json({
      success: true,
      message: "สมัครรับข่าวสารสำเร็จแล้ว",
      data: subscriber,
    });
  } catch (error) {
    console.error("Error in POST /api/newsletter/subscribe:", error);
    return res.status(500).json({
      success: false,
      message: "เกิดข้อผิดพลาดทางเซิร์ฟเวอร์ กรุณาลองใหม่อีกครั้ง",
    });
  }
}
