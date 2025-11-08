import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { featuredProjects } from '@/data/portfolio';
// 🚨 1. นำเข้าข้อมูลจากไฟล์ data (แก้ไข Path และคำสะกด)

export default function Portfolio() {
    return (
        <Layout>
            <Head>
                <title>Portfolio | ผลงานทั้งหมดของเรา</title>
                <meta name="description" content="รวมผลงานที่เราได้พัฒนาให้กับลูกค้า" />
            </Head>
            <div className="bg-white py-20 text-center ">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    ผลงานทั้งหมด
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-4">
                    เราสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่ตอบโจทย์ธุรกิจของคุณด้วยเทคโนโลยีล่าสุด
                </p>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                
                                {/* 🚨 2. แก้ไข Class รูปภาพ และ Gradient */}
                                <div className="h-48 relative bg-gradient-to-br from-blue-400 to-purple-600" >
                                    <img 
                                        className="h-full w-full object-cover" // ⬅️ แก้ไขตรงนี้
                                        src={project.imageSrc} 
                                        alt={project.title}
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {/* 🚨 3. แก้ไข Error การแสดงผล Array (ใช้ .map()) */}
                                        {project.tags1.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tag}</span>
                                        ))}
                                        {project.tags2.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <Link href={project.link} className="text-blue-600 font-semibold hover:text-blue-700">
                                        ดูรายละเอียด →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}