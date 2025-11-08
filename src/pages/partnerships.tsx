import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";

// (สมมติ) เพิ่มข้อมูลพาร์ทเนอร์อื่นๆ เข้ามา
const allPartners = [
  { id: 1, name: 'มทร.อีสาน', logoPath: '/img/logo-rmuti.png' }, // (ควรใช้โลโก้แทนแบนเนอร์)
  { id: 2, name: 'สถาบัน ก', logoPath: '/img/logo-a.png' },
  { id: 3, name: 'สถาบัน ข', logoPath: '/img/logo-b.png' },
  { id: 4, name: 'บริษัท ค', logoPath: '/img/logo-c.png' },
  { id: 5, name: 'บริษัท ง', logoPath: '/img/logo-d.png' },
  { id: 6, name: 'สถาบัน จ', logoPath: '/img/logo-e.png' },
];

export default function PartnershipsPage() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              พันธมิตรของเรา
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              เราร่วมมือกับสถาบันการศึกษาและองค์กรชั้นนำมากมาย
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* ในหน้านี้ แนะนำให้ใช้ "โลโก้" (เช่น 150x150) 
                  แทน "แบนเนอร์" (800x300) ที่ใช้ในหน้าแรก 
                */}
                <div className="relative h-24 w-full flex items-center justify-center">
                  <Image
                    src={partner.logoPath}
                    alt={partner.name}
                    width={150}
                    height={100}
                    objectFit="contain" // ใช้ contain เพื่อให้โลโก้ไม่บิดเบี้ยว
                  />
                </div>
                <p className="mt-4 font-semibold text-gray-700 text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}