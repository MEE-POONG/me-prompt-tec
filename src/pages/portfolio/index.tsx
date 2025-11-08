import React from 'react';
import Head from 'next/head';
import FeaturedProjectsSection from '../../container/Home/FeaturedProjectsSection';
import Layout from '@/components/Layout';
export default function Portfolio() {
    return (


        <Layout>

            <Head>
                <title>Portfolio | ผลงานทั้งหมดของเรา</title>
                <meta name="description" content="รวมผลงานที่เราได้พัฒนาให้กับลูกค้า" />
            </Head>

            {/* ⬅️ แทนที่ <Layout> ด้วย <div> ที่มี Class พื้นฐาน */}
            <div className="min-h-screen flex flex-col">

                {/* ส่วน Header ของหน้า Portfolio */}
                <div className="bg-white py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        ผลงานทั้งหมด
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        เราสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่ตอบโจทย์ธุรกิจของคุณด้วยเทคโนโลยีล่าสุด
                    </p>
                </div>

                {/* นำเข้าส่วนแสดงผลโปรเจกต์เด่น/ทั้งหมด */}
                {/* <FeaturedProjectsSection />  */}

            </div>
            {/* ⬅️ จบ div แทน </Layout> */}
        </Layout>
    );
}