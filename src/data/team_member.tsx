// data/profiles.ts

// 🚨 1. (สำคัญ) Interface ต้องใช้ string สำหรับ imageSrc
export interface Team {
  id: number;
  name: string;
  title: string;
  bio: string; 
  imageSrc: string;
  instagram?: string; 
  github?: string;
  portfolio?: string; // ⬅️ (แก้ไข) เปลี่ยนจาก linkedin
}

// 2. 🚨 (สำคัญ) เพิ่มข้อมูล social links ให้กับ Array
export const team_member: Team[] = [
  {
    id: 1,
    name: "ณัฐวีษ์ ตันตระกูล",
    title: "Full Stack Developer",
    bio: "me prompt technology ผู้ก่อตั้งและนักพัฒนาซอฟต์แวร์",
    imageSrc: "/image/tmb-1.jpg", // ⬅️ ใช้ Path String
    instagram: "https://www.instagram.com/tanaaa_pattt/", // ⬅️ เพิ่ม Link
    github: "https://github.com/Ggg-tanapatt",
    portfolio: "https://wondrous-tulumba-da430d.netlify.app/",
  },
  {
    id: 2,
    name: "ญาสุมินทร์ สิมตะมะ",
    title: "Developer",
    bio: "me prompt technology นักพัฒนาซอฟต์แวร์",
    imageSrc: "/image/tmb3.webp",
    instagram: "https://instagram.com",
    github: "https://github.com",
    portfolio: "https://superb-cat-e3792e.netlify.app/",
  },
  {
    id: 3,
    name: "Warayut Tekrathok",
    title: "Special Consultant",
    bio: "me prompt technology Special Consultant",
    imageSrc: "/image/tmb2.png",
    instagram: "https://www.instagram.com/nx_sxpan?igsh=MWo0cDBuZGV1cTIwaA%3D%3D&utm_source=qr",
    github: "https://github.com/Supansa09",
    portfolio: " https://cute-daffodil-356357.netlify.app/",

  },
];