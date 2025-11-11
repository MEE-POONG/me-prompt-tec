import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 1. 👇 (อัปเดต) แก้ลิงก์ "href" ให้เป็นตัวพิมพ์เล็กทั้งหมด
const mockProjects = [
  {
    id: 1,
    title: 'AI Workshop 2024',
    description: 'จัดอบรมเชิงปฏิบัติการด้าน AI และ Machine Learning ให้นักศึกษา CS RMUTI',
    imageUrl: '/image/AI.png', // (คุณบอกว่าเปลี่ยนเป็น /image/ แล้ว)
    href: '/projects/aiworkshop', // 👈 แก้ไข
  },
  {
    id: 2,
    title: 'Internship Program Project',
    description: 'โครงการพัฒนาระบบจัดการข้อมูลภายใน (Internal Tool) ร่วมกับนักศึกษาฝึกงาน',
    imageUrl: '/image/Inter.png',
    href: '/projects/internship', // 👈 แก้ไข
  },
  {
    id: 3,
    title: 'Smart Campus Hackathon',
    description: 'เป็นกรรมการและ Mentor ในกิจกรรม Hackathon เพื่อพัฒนามหาวิทยาลัยอัจฉริยะ',
    imageUrl: '/image/smart.png',
    href: '/projects/smartcampus', // 👈 แก้ไข
  },
]

// (โค้ดส่วนที่เหลือ... ไม่ต้องแก้ไข)
export default function Product_Project() {
  return (
    <section className="py-20 relative bg-linear-to-tr from-cyan-400 via-blue-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            โครงการที่เราร่วมทำ
          </h2>
          <p className="mt-4 text-xl text-white max-w-2xl mx-auto">
            ตัวอย่างผลงานและกิจกรรมที่เราได้ทำร่วมกับพันธมิตร
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}