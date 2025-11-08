// ======================================
// 📁 src/data/portfolio.ts
// ======================================

export interface Project {
  id: number;
  title: string;
  description: string;
  detail: string; // ✅ คำอธิบายยาว
  imageSrc: string;
  tags1: string[];
  tags2: string[];
  techStack: string[];
  link: string; // ✅ เพิ่มฟิลด์นี้เพื่อให้ไม่ error
}

// ======================================
// 🧱 ตัวอย่างข้อมูล Project
// ======================================

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "สร้างประสบการณ์ช้อปปิ้งที่ราบรื่นและรวดเร็วบน Next.js",
    detail: "ระบบร้านค้าออนไลน์ที่ใช้ Next.js และ Firebase รองรับผู้ใช้หลายพันคนพร้อมระบบจัดการสินค้าแบบเรียลไทม์",
    tags1: ["Firebase"],
    tags2: ["React"],
    link: "/portfolio/project-1",
    imageSrc: "/img/aaa.jpg",
    techStack: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
  },
  {
    id: 2,
    title: "SaaS Dashboard App",
    description: "แดชบอร์ดจัดการข้อมูลผู้ใช้งานแบบเรียลไทม์ด้วย React Hooks.",
    detail: "ระบบแสดงข้อมูลผู้ใช้งานแบบ real-time พัฒนาด้วย React และใช้ Firebase เป็นฐานข้อมูลหลัก",
    tags1: ["Firebase"],
    tags2: ["React"],
    link: "/portfolio/project-2",
    imageSrc: "/img/www.jpg",
    techStack: ["React", "Firebase", "TailwindCSS", "Vite"],
  },
  {
    id: 3,
    title: "Company Portfolio Site",
    description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
    detail: "เว็บไซต์นำเสนอข้อมูลบริษัทโดยเน้นความสวยงามและการจัดวาง UX ที่ดี พร้อมรองรับ SEO เต็มรูปแบบ",
    tags1: ["Firebase"],
    tags2: ["React"],
    link: "/portfolio/project-3",
    imageSrc: "/img/pic.jpg",
    techStack: ["Next.js", "SEO", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Landing Page Generator",
    description: "ระบบสร้างหน้า Landing Page อัตโนมัติ",
    detail: "สามารถสร้างหน้า Landing Page ได้ในไม่กี่คลิก พร้อมระบบบันทึก Leads แบบเรียลไทม์",
    tags1: ["Firebase"],
    tags2: ["React"],
    link: "/portfolio/project-4",
    imageSrc: "/img/www.jpg",
    techStack: ["React", "Firebase", "ChakraUI"],
  },
  {
    id: 5,
    title: "Personal Blog System",
    description: "ระบบจัดการบทความส่วนตัวด้วย Markdown.",
    detail: "บล็อกส่วนตัวที่เขียนด้วย Next.js และ Markdown Editor รองรับ SEO และ responsive ทุกขนาดหน้าจอ",
    tags1: ["Next.js"],
    tags2: ["Markdown"],
    link: "/portfolio/project-5",
    imageSrc: "/img/aaa.jpg",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    description: "เว็บไซต์แสดงผลงานแบบ interactive และ modern design.",
    detail: "รวมผลงานพร้อมภาพและรายละเอียดเทคโนโลยีที่ใช้ พัฒนาโดยใช้ Next.js และ TailwindCSS",
    tags1: ["React"],
    tags2: ["Next.js"],
    link: "/portfolio/project-6",
    imageSrc: "/img/pic.jpg",
    techStack: ["Next.js", "TailwindCSS", "Vercel"],
  },
];
