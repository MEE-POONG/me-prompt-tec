// pages/portfolio/[id].tsx

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { Project, featuredProjects } from '@/data/portfolio';
import { useRouter } from 'next/router';

const PortfolioDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // ✅ ดึง id จาก URL
    const [project, setProject] = useState<Project | undefined>(undefined);

    // ✅ เมื่อ id เปลี่ยน ให้ค้นหา project ที่ตรงกัน
    useEffect(() => {
        if (typeof id === 'string') {
            // กรณีดึงจากไฟล์ data (แบบ static)
            const project = featuredProjects.find(() => id === id);
            setProject(project);
        }
    }, [id]);

    // ✅ Loading state
    if (!project) {
        return (
            <Layout>
                <div className="text-center py-20">กำลังโหลดข้อมูล...</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{project.title} | รายละเอียดผลงาน</title>
            </Head>

            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <Link
                    href="/portfolio"
                    className="text-blue-600 font-medium hover:underline mb-8 block w-fit"
                >
                    ← กลับไปหน้าผลงานทั้งหมด
                </Link>

                {/* ===== รูปภาพ (Image) ===== */}
                <div
                    key={project.id}
                    className={`w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-12 relative ${project.id}`}
                >
                    <Image
                        src={project.imageSrc}
                        alt={`Cover image for ${project.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="z-10"
                        priority
                    />
                </div>

                {/* ===== ชื่อ (Title) ===== */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600">{project.description}</p>
                </div>

                {/* ===== แท็ก (Tags) ===== */}
                <div className="max-w-md mx-auto text-center mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {project.tags1.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-bold"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags2.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-bold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ===== รายละเอียด (Details) ===== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            ภาพรวมโครงการ
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            เทคโนโลยีที่ใช้
                        </h2>
                        <ul className="space-y-3">
                            {project.techStack.map((tech) => (
                                <li
                                    key={tech}
                                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm shadow-sm"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default PortfolioDetailPage;

