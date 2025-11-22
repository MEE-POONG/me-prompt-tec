// src/pages/api/partners/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        return await handleGet(req, res);
      case "POST":
        return await handlePost(req, res);
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        return res
          .status(405)
          .json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error: any) {
    console.error("API /partners error:", error);

    // 👇 เพิ่มรายละเอียด error ออกมาทาง response ด้วย (เฉพาะตอน dev)
    return res.status(500).json({
      error: "Internal Server Error",
      message: error?.message ?? String(error),
      stack:
        process.env.NODE_ENV === "development" && error?.stack
          ? error.stack
          : undefined,
    });
  }
}

// GET: ดึงข้อมูลพันธมิตรทั้งหมด
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const { search, status } = req.query;

  const where: any = {};

  if (status) {
    where.status = status as string;
  }

  if (search) {
    where.name = {
      contains: search as string,
      mode: "insensitive",
    };
  }

  const partners = await prisma.partner.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return res.status(200).json({ data: partners });
}

// POST: สร้างพันธมิตรใหม่
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const {
    name,
    type: partnerType, // <- เปลี่ยนชื่อ local variable เพราะ type เป็น keyword
    website,
    logo,
    description,
    status,
    facebookUrl,
  } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Missing required field: name" });
  }

  const newPartner = await prisma.partner.create({
    data: {
      name,
      type: partnerType || "Company",
      website,
      logo,
      description,
      facebookUrl,
      status: status || "active",
    },
  });

  return res.status(201).json({
    message: "Partner created successfully",
    data: newPartner,
  });
}
