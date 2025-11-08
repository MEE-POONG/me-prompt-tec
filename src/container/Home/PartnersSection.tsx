import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const universityPartners = [
  { 
    id: 1, 
    name: 'มทร.อีสาน', 
    logoPath: '/img/rmuti.png', 
    altText: 'แบนเนอร์ต้อนรับนักศึกษาใหม่ มทร.อีสาน' 
  },
]

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="bg-linear-to-r from-green-500 via-cyan-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
              ความร่วมมือกับสถาบันการศึกษา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ให้พร้อมสำหรับโลกเทคโนโลยี
            </p>
          </div>

          <div className="flex justify-center items-center">
            {universityPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="relative max-w-3xl bg-gray-100 rounded-lg p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300" 
              >
                <Image
                  src={partner.logoPath}
                  alt={partner.altText}
                  width={800}
                  height={300} 
                  objectFit="cover" 
                  className="w-full h-full object-cover rounded-md" 
                />
              </div>
            ))}
          </div> 

          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-block font-semibold text-yellow-5 bg-clip-text text-transparent hover:from-green-400 hover:via-cyan-400 hover:to-purple-400"
            >
              ดูความร่วมมือทั้งหมด →
            </Link>
          </div>
        </div>
      </section>
  );
}