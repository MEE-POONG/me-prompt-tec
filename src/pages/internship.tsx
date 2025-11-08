import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head'; 
import Link from 'next/link'; 
import Image from 'next/image';
export default function Internship() {
  return (
    <Layout>
      <Head>
        <title>Internship Program | โปรแกรมฝึกงาน</title>
        <meta name="description" content="เข้าร่วมโปรแกรมฝึกงานกับเรา" />
      </Head>

      {/* ===== (NEW) 0. Hero Banner (พร้อมภาพพื้นหลัง) ===== */}
      <section className="relative h-96 bg-blue-800 flex items-center justify-center text-white overflow-hidden">
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

      {/* ===== 2. Open Positions (ตำแหน่งที่เปิดรับ) ===== */}
      {/* 🚨 2. เปลี่ยนพื้นหลัง Section เป็น bg-gray-100 */}
      <section id="open-positions" className="py-20 bg-gray-100"> 
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            โปรแกรมฝึกงาน (Internship)
            <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4"> {/* 🚨 ปรับลดขนาดตัวอักษร */}
          เริ่มต้นเส้นทางอาชีพของคุณกับเรา เรียนรู้จากโปรเจกต์จริงและทีมงานมืออาชีพ
        </p>
          </h2>
          
          <div className="space-y-6">
            {/* 🚨 3. เปลี่ยน Card เป็น bg-white (ขาวบนเทา) และเพิ่ม Hover Effect */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-800">Frontend Developer (Intern)</h3>
                <p className="text-gray-600 mt-1">เรียนรู้ React, Next.js, และ Tailwind CSS</p>
              </div>
              <Link 
                href="/apply/frontend" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
              >
                สมัคร
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-800">Backend Developer (Intern)</h3>
                <p className="text-gray-600 mt-1">เรียนรู้ Node.js, Prisma, และ Database</p>
              </div>
              <Link 
                href="/apply/backend" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
              >
                สมัคร
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-800">UI/UX Designer (Intern)</h3>
                <p className="text-gray-600 mt-1">เรียนรู้ Figma, Wireframing, และ Prototyping</p>
              </div>
              <Link 
                href="/apply/uiux" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
              >
                สมัคร
              </Link>
            </div>
            
          </div>
        </div>
      </section>
      {/* ===== 4. Application Process (ขั้นตอนการสมัคร) ===== */}
      <section className="py-20 bg-gray-100"> {/* 🚨 7. สลับเป็น bg-gray-100 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                ขั้นตอนการสมัคร
            </h2>
            <div className="flex flex-col md:flex-row justify-between text-center gap-8">
                {/* ขั้นตอนที่ 1 */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">1</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">ส่ง Resume/Portfolio</h3>
                    <p className="text-gray-600">ส่งเอกสารของคุณผ่านทางอีเมลหรือลิงก์สมัคร</p>
                </div>
                {/* ขั้นตอนที่ 2 */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">2</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">สัมภาษณ์ออนไลน์</h3>
                    <p className="text-gray-600">พูดคุยเกี่ยวกับความสนใจและทักษะของคุณ</p>
                </div>
                {/* ขั้นตอนที่ 3 */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">3</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">ประกาศผล</h3>
                    <p className="text-gray-600">แจ้งผลการพิจารณาและนัดหมายวันเริ่มงาน</p>
                </div>
            </div>
        </div>
      </section>

    </Layout>
  );
}