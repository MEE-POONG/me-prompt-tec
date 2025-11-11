import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const mockProjects = [
  {
    id: 1,
    title: 'AI Workshop 2024',
    description: 'จัดอบรมเชิงปฏิบัติการด้าน AI และ Machine Learning ให้นักศึกษา CS RMUTI',
    imageUrl: '/img/AI.png', 
  },
  {
    id: 2,
    title: 'Internship Program Project',
    description: 'โครงการพัฒนาระบบจัดการข้อมูลภายใน (Internal Tool) ร่วมกับนักศึกษาฝึกงาน',
    imageUrl: '/img/Inter.png', 
  },
  {
    id: 3,
    title: 'Smart Campus Hackathon',
    description: 'เป็นกรรมการและ Mentor ในกิจกรรม Hackathon เพื่อพัฒนามหาวิทยาลัยอัจฉริยะ',
    imageUrl: '/img/smart.png', 
  },
]

export default function Product_Project() {
  return (
    // (โค้ดสีพื้นหลังของคุณ)
    <section className="py-20 relative bg-linear-to-tr from-cyan-400 via-blue-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* === ส่วนหัวข้อของโปรเจค === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            โครงการที่เราร่วมทำ
          </h2>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            ตัวอย่างผลงานและกิจกรรมที่เราได้ทำร่วมกับพันธมิตร
          </p>
        </div>
        {/* === Grid แสดงผลโครงการ === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* 2. 👇 (อัปเดต) เปลี่ยน div สีเทา เป็น <Image> */}
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover" // ทำให้รูปภาพเต็มกรอบ h-48
                />
              </div>
              {/* เนื้อหาการ์ด */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  ดูรายละเอียด →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}