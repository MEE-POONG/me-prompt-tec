import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

// ข้อมูลของหน้านี้ (Hardcode)
const project = {
  title: 'AI Workshop 2024',
  description: 'จัดอบรมเชิงปฏิบัติการด้าน AI และ Machine Learning ให้นักศึกษา CS RMUTI',
  imageUrl: '/img/AI.png', 
}

export default function AIWorkshopPage() {
  return (
    <Layout>
      {/* ส่วน Hero (เราจะใช้รูปของโปรเจค) */}
      <section className="relative w-full h-[50vh] bg-black">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="opacity-50" // ทำให้รูปจางลง
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ส่วนเนื้อหา */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            รายละเอียดโปรเจค
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-12 border-t pt-8">
            <Link href="/partnerships" className="font-semibold text-blue-600 hover:text-blue-700">
              ← กลับไปหน้าพันธมิตร
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}