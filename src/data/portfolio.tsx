export interface Project {
    id: number;
    title: string;
    description: string;
    tags1: string[];
    tags2: string[];
    link: string;
    imageSrc: string;
    techStack: string[];
    // เพิ่ม field อื่นๆ ที่จำเป็น (gradient, details, etc.)
}

export const featuredProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "สร้างประสบการณ์ช้อปปิ้งที่ราบรื่นและรวดเร็วบน Next.js",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-1",
        imageSrc: "/img/aaa.jpg", // Path รูปภาพที่ 1
        techStack: []
    },
    {
        id: 2,
        title: "SaaS Dashboard App",
        description: "แดชบอร์ดจัดการข้อมูลผู้ใช้งานแบบเรียลไทม์ด้วย React Hooks.",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-2",
        imageSrc: "/img/www.jpg", // Path รูปภาพที่ 2
        techStack: []
    },
    {
        id: 3,
        title: "Company Portfolio Site",
        description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-3",
        imageSrc: "/img/pic.jpg", // Path รูปภาพที่ 3

        techStack: []
    },
    {
        id: 4,
        title: "Company Portfolio Site",
        description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-4",
        imageSrc: "/img/www.jpg", // Path รูปภาพที่ 3
        techStack: []
    },
    {
        id: 5,
        title: "Company Portfolio Site",
        description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-5",
        imageSrc: "/img/aaa.jpg", // Path รูปภาพที่ 3
        techStack: []
    },
    {
        id: 6,
        title: "Company Portfolio Site",
        description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
        tags1: ["Firebase"], tags2: ["React"],
        link: "/portfolio/project-6",
        imageSrc: "/img/pic.jpg", // Path รูปภาพที่ 3
        techStack: []
    },
];
