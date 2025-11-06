import Link from 'next/link'
import React from 'react'
const featuredProjects = [
    { 
        id: 1, 
        title: "E-Commerce Platform", 
        description: "สร้างประสบการณ์ช้อปปิ้งที่ราบรื่นและรวดเร็วบน Next.js",
         tags1: ["Firebase"], tags2: ["React"], 
        link: "/portfolio/project-1",
        imageSrc: "/img/aaa.jpg", // Path รูปภาพที่ 1
    },
    { 
        id: 2, 
        title: "SaaS Dashboard App", 
        description: "แดชบอร์ดจัดการข้อมูลผู้ใช้งานแบบเรียลไทม์ด้วย React Hooks.",
        tags1: ["Firebase"], tags2: ["React"], 
        imageSrc: "/img/Animation.png", // Path รูปภาพที่ 2
    },
    { 
        id: 3, 
        title: "Company Portfolio Site", 
        description: "เว็บไซต์องค์กรที่เน้นดีไซน์ UI/UX และการทำ SEO ที่ดี.",
         tags1: ["Firebase"], tags2: ["React"], 
        link: "/portfolio/project-3",
        imageSrc: "/img/aaa.jpg", // Path รูปภาพที่ 3
    },
];
export default function FeaturedProjectsSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ผลงานของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ชมตัวอย่างผลงานที่เราได้พัฒนาให้กับลูกค้าหลากหลายธุรกิจ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-linear-to-br from-blue-400 to-purple-600" >
                <img className="h-48 w-96 object-unset" src={project.imageSrc}/>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{project.tags1}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{project.tags2}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link href="/portfolio" className="text-blue-600 font-semibold hover:text-blue-700">
                    ดูรายละเอียด →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              ดูผลงานทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
