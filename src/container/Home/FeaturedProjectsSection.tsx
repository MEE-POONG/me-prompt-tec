import Link from "next/link";
import React from "react";

// 1. ⬇️ ย้ายข้อมูลออกมานอก Component (ทำงานได้ดีกว่า)
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "สร้างประสบการณ์ช้อปปิ้งที่ราบรื่นและรวดเร็วบน Next.js",
    tags1: ["Firebase"],
    tags2: ["React"],
    link: "/portfolio/1", // ⬅️ แก้ไข Link ให้เป็น Dynamic
    imageSrc: "/image/ciry.jpg",
  },
  {
    id: 2,
    title: "SaaS Dashboard App",
    description: "แดชบอร์ดจัดการข้อมูลผู้ใช้งานแบบเรียลไทม์ด้วย React Hooks.",
    tags1: ["Supabase"],
    tags2: ["React"],
    link: "/portfolio/2", // ⬅️ แก้ไข Link ให้เป็น Dynamic
    imageSrc: "/image/dada.jpg",
  },
  {
    id: 3,
    title: "Company Portfolio Site",
    description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
    tags1: ["Prisma"],
    tags2: ["Next.js"],
    link: "/portfolio/3", // ⬅️ แก้ไข Link ให้เป็น Dynamic
    imageSrc: "/image/uix.jpg",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ชมตัวอย่างผลงานที่เราได้พัฒนาให้กับลูกค้าหลากหลายธุรกิจ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            // 2. ⬇️ เพิ่มเอฟเฟกต์ "ยกตัวขึ้น" (Hover) ที่นี่
            (<div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              {/* 3. ⬇️ แก้ไข Gradient Class และ Image Class */}
              <div className="h-48 relative bg-linear-to-br from-blue-400 to-purple-600">
                <img
                  className="h-full w-full object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {/* 4. ⬇️ แก้ไข Error การแสดงผล Array (ใช้ .map()) */}
                  {project.tags1.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags2.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* 5. ⬇️ แก้ไข Link href ให้เป็น Dynamic */}
                <Link
                  href={project.link}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  ดูรายละเอียด →
                </Link>
              </div>
            </div>)
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500 hover:text-amber-50 transition-all duration-300 hover:scale-110"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
