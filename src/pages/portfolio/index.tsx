import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { featuredProjects } from '@/data/portfolio';

export default function Portfolio() {
    // สร้าง const fetch จำลองการดึงข้อมูลมา ปล.ข้อมูลจาก '@/data/portflio' ก่อนเชื่อม api จริง
    // set ข้อมูลก่อนทำ loop โชว์
    // useEffect 
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
                                <div className="h-48 bg-linear-to-br from-blue-400 to-purple-600" >
                                    <img className="h-48 w-96 object-unset" src={project.imageSrc} />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{project.tags1}</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">{project.tags2}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <Link href={`/portfolio/${project.id}`} className="text-blue-600 font-semibold hover:text-blue-700">
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