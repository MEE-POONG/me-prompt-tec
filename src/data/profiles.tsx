// data/profiles.ts

// 🚨 1. ไม่ต้อง Import รูปภาพ

// 2. 🚨 แก้ไข Interface ให้ 'imageSrc' เป็น 'string' เท่านั้น
export interface Profile {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageSrc: string; // ⬅️ เปลี่ยนเป็น string
}

// 3. 🚨 Export ข้อมูล Array โดยใช้ Path String โดยตรง
export const allProfiles: Profile[] = [
  {
    id: 1,
    name: "",
    title: "Intern",
    bio: "นักศึกษาฝึกงาน",
    imageSrc: "/image/pat2.jpg", // ⬅️ ใช้ Path String (แบบนี้ถูกต้อง)
  },
  {
    id: 2,
    name: "พัด",
    title: "Intern",
    bio: "นักศึกษาฝึกงาน",
    imageSrc: "/image/pat1.jpg", // ⬅️ ใช้ Path String
  },
  {
    id: 3,
    name: "",
    title: "Intern",
    bio: "นักศึกษาฝึกงาน",
    imageSrc: "/image/pat3.jpg", // ⬅️ ใช้ Path String
  },
  {
    id: 4,
    name: "",
    title: "Project Manager",
    bio: "นักศึกษาฝึกงาน",
    imageSrc: "/image/pat4.jpg", // ⬅️ ใช้ Path String
  },
];