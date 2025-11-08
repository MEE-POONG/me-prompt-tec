import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head'; // 1. Import Head สำหรับ Title
import Link from 'next/link'; // 2. Import Link สำหรับปุ่ม

export default function Internship() {
  return (
    <Layout>
      <Head>
        <title>Internship Program | โปรแกรมฝึกงาน</title>
        <meta name="description" content="เข้าร่วมโปรแกรมฝึกงานกับเรา" />
      </Head>

      {/* ===== 1. Hero Section (ส่วนหัว) ===== */}
      <section className="bg-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          โปรแกรมฝึกงาน (Internship)
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
          เริ่มต้นเส้นทางอาชีพของคุณกับเรา เรียนรู้จากโปรเจกต์จริงและทีมงานมืออาชีพ
        </p>
      </section>

      {/* ===== 2. Benefits Section (ส่วนไอคอน) ===== */}
      {/* (ผมนำโค้ดจาก InternshipCTASection มาปรับใช้ที่นี่ครับ) */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            สิ่งที่คุณจะได้รับ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'โปรเจกต์จริง', icon: '💼' },
              { label: 'เทคโนโลยีล่าสุด', icon: '🚀' },
              { label: 'ทีมมืออาชีพ', icon: '👥' },
              { label: 'ประสบการณ์', icon: '⭐' },
            ].map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 transform hover:scale-105 transition duration-300">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <div className="font-semibold text-gray-800">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. Open Positions (ตำแหน่งที่เปิดรับ) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            ตำแหน่งที่เปิดรับ
          </h2>
          
          <div className="space-y-6">
            {/* ตำแหน่งที่ 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Developer (Intern)</h3>
                <p className="text-gray-600 mt-1">เรียนรู้ React, Next.js, และ Tailwind CSS</p>
              </div>
              <Link 
                href="/apply/frontend" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
              >
                สมัคร
              </Link>
            </div>

            {/* ตำแหน่งที่ 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Backend Developer (Intern)</h3>
                <p className="text-gray-600 mt-1">เรียนรู้ Node.js, Prisma, และ Database</p>
              </div>
              <Link 
                href="/apply/backend" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
              >
                สมัคร
              </Link>
            </div>

            {/* ตำแหน่งที่ 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">UI/UX Designer (Intern)</h3>
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

    </Layout>
  );
}