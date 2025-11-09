import Link from "next/link";
import React from "react";

export default function HeroBanner_Internship() {
  return (
    <section className="relative h-96 bg-blue-800 flex items-center justify-center text-white overflow-hidden drop-shadow-lg">
      {/* 🚨 รูปภาพ Banner (คุณต้องเตรียมไฟล์ภาพไว้ใน public/img/ หรือ path อื่นๆ) */}
      {/* <Image 
          src="/img/internship-banner.jpg" // 🚨 แก้ไขเป็น Path รูปภาพของคุณ
          alt="Internship Banner"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-50" // ทำให้ภาพจางลงเล็กน้อย
        /> */}
      {/* เนื้อหา Banner */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          โอกาสเริ่มต้นอาชีพของคุณอยู่ที่นี่
        </h2>
        <p className="text-xl md:text-2xl font-light drop-shadow-md">
          มาร่วมสร้างสรรค์และเติบโตไปกับทีมของเรา
        </p>
        {/* Optional: เพิ่มปุ่ม CTA ใน Banner ถ้าต้องการ */}
        <Link
          href="#open-positions" // ลิงก์ไปยังส่วนตำแหน่งงาน (ใช้ ID)
          className="mt-8 inline-block bg-white text-blue-800 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          ดูโปรแกรมฝึกงาน
        </Link>
      </div>
    </section>
  );
}
