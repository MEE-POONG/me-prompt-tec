// data/profiles.ts

// 🚨 1. (สำคัญ) Interface ต้องใช้ string สำหรับ imageSrc
export interface Profile {
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
export const allProfiles: Profile[] = [
  {
    id: 1,
    name: "ธนภัทร โพธิ์ศรี",
    title: "นักศึกษาฝึกงาน (Intern)",
    bio: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน สาขาระบบสารสนเทศ",
    imageSrc: "/image/pat2.jpg", // ⬅️ ใช้ Path String
    instagram: "https://www.instagram.com/tanaaa_pattt/", // ⬅️ เพิ่ม Link
    github: "https://github.com/Ggg-tanapatt",
    portfolio: "https://linkedin.com",
  },
  {
    id: 2,
    name: "สุพรรษา ฉีดวงแก้ว",
    title: "นักศึกษาฝึกงาน (Intern)",
    bio: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน สาขาระบบสารสนเทศ",
    imageSrc: "/image/pic1.jpg",
    instagram: "https://www.instagram.com/nx_sxpan?igsh=MWo0cDBuZGV1cTIwaA%3D%3D&utm_source=qr",
    github: "https://github.com/Supansa09",
    portfolio: "https://linkedin.com",

  },
  {
    id: 3,
    name: "ศิวกร พล่ำแก้ว",
    title: "นักศึกษาฝึกงาน (Intern)",
    bio: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน สาขาวิทยาการคอมพิวเตอร์",
    imageSrc: "/image/pic2.jpg",
    instagram: "https://instagram.com",
    github: "https://github.com",
<<<<<<< HEAD
    portfolio: "https://linkedin.com",
=======
    linkedin: "https://superb-cat-e3792e.netlify.app/",
>>>>>>> 114580ef166c1931e55e9eb2ea039908c6933132
  },
  {
    id: 4,
    name: "ธาวิน กาฬสินธุ์",
    title: "นักศึกษาฝึกงาน (Intern)",
    bio: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน สาขาเทคโนโลยีมัลติมีเดีย",
    imageSrc: "/image/pic3.jpg", // (รูปเปล่า)
    instagram: "https://instagram.com",
    github: "https://github.com",
    portfolio: "https://linkedin.com",
  },
];