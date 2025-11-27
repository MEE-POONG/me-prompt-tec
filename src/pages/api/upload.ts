import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  // สร้างโฟลเดอร์ถ้ายังไม่มี
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filename: (_name, ext, _part) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const extension = ext || '.pdf';
      return `resume-${uniqueSuffix}${extension}`;
    },
  });

  try {
    const [_fields, files] = await form.parse(req);
    const file = files.file?.[0];

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // ตรวจสอบว่าเป็นไฟล์ PDF
    if (!file.mimetype?.includes('pdf')) {
      // ลบไฟล์ที่อัพโหลดมา
      fs.unlinkSync(file.filepath);
      return res.status(400).json({ error: 'Only PDF files are allowed' });
    }

    // ดึงชื่อไฟล์ที่ถูกบันทึก
    const fileName = path.basename(file.filepath);
    const fileUrl = `/uploads/${fileName}`;

    return res.status(200).json({
      message: 'File uploaded successfully',
      url: fileUrl,
      fileName: fileName,
      mimeType: file.mimetype,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ error: 'File upload failed' });
  }
}
