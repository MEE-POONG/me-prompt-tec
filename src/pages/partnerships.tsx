import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
// [NEW] ⭐️ Import Link และ FaFacebook (เพราะเราจะใช้การ์ดตัวเต็ม) ⭐️
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

// [FIX] ⭐️ ข้อมูล 3 สาขา (เหมือนเดิม) ⭐️
const allPartners = [
  { 
    id: 1, 
    name: 'Computer Science RMUTI', 
    logoPath: '/img/logo_cs.jpg',
    altText: 'โลโก้ Computer Science RMUTI',
    facebookUrl: 'https://www.facebook.com/csrmuti?rdid=JnkW6ybRPUu45aAf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17z7FffR7e%2F#'
  },
  { 
    id: 2, 
    name: 'Information Systems RMUTI', 
    logoPath: '/img/logo_is.jpg',
    altText: 'โลโก้ Information Systems RMUTI',
    facebookUrl: 'http://facebook.com/is.ba.rmuti' 
  },
  { 
    id: 3, 
    name: 'Multimedia Technology RMUTI', 
    logoPath: '/img/logo_mt.jpg',
    altText: 'โลโก้ Multimedia Technology RMUTI',
    facebookUrl: 'https://www.facebook.com/multimedia.rmuti' 
  },
  // (คุณสามารถเพิ่มพาร์ทเนอร์อื่นๆ ที่นี่ได้ในอนาคต)
];

export default function PartnershipsPage() {
  return (
    <Layout>
      
      {/* [NEW] ⭐️ 1. เพิ่ม Hero Section (ยืมจากหน้า Contact) ⭐️ */}
      <section className="py-24 md:py-32 text-white bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            พันธมิตรของเรา
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
            เราร่วมมือกับสถาบันการศึกษาและองค์กรชั้นนำมากมาย
          </p>
        </div>
      </section>

      {/* 2. ส่วนแสดงผลการ์ด */}
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* [FIX] ⭐️ 3. อัปเกรดการ์ดให้มีลูกเล่น (ยืมจาก PartnersSection) ⭐️ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {allPartners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 
                           transition-all duration-300 group overflow-hidden 
                           hover:scale-105 hover:shadow-2xl" 
              >
                {/* (A) ส่วนของรูปภาพ */}
                <div className="relative w-full h-56 flex items-center justify-center"> 
                  <Image
                    src={partner.logoPath}
                    alt={partner.name}
                    width={200}
                    height={200}
                    objectFit="contain" 
                    className="max-w-full max-h-full" 
                  />

                  {/* (B) ส่วน Overlay (เบลอ+เลื่อนขึ้น) */}
                  <div 
                    className="absolute inset-x-0 bottom-0 
                               h-1/2
                               flex flex-col items-center justify-center p-4 
                               text-center 
                               bg-gradient-to-t from-black/80 via-black/40 to-transparent
                               backdrop-blur-sm
                               translate-y-full group-hover:translate-y-0
                               opacity-0 group-hover:opacity-100
                               transition-all duration-300 ease-out" 
                  >
                    {/* (C) ชื่อสาขา */}
                    <p className="font-bold text-lg text-white mb-2"> 
                      {partner.name}
                    </p>
                    
                    {/* (D) ไอคอน Facebook */}
                    {partner.facebookUrl && ( 
                      <Link 
                        href={partner.facebookUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-200"
                      >
                        <FaFacebook className="text-3xl" />
                      </Link>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* (B) ส่วน Call to Action (CTA) (เหมือนเดิม) */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              สนใจร่วมเป็นพันธมิตรกับเรา?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              เรามองหาพันธมิตรใหม่ๆ ทั้งสถาบันการศึกษาและบริษัทเอกชน
              เพื่อร่วมกันสร้างสรรค์นวัตกรรมและพัฒนาบุคลากรด้านเทคโนโลยี
              หากคุณสนใจ, ติดต่อเราได้เลย
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 border-2 border-white/20 transition-all duration-300 hover:scale-105"
              >
                ติดต่อเราเลย
              </Link>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}