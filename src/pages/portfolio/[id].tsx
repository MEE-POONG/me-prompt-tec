import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { Project } from '@/types/project';
import { useRouter } from 'next/router';

const PortfolioDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof id === 'string') {
            const fetchProject = async () => {
                try {
                    setLoading(true);
                    const response = await fetch('/api/v1/public/projects');
                    const data = await response.json();

                    if (data.success) {
                        const foundProject = data.data.projects.find(
                            (proj: Project) => proj.slug === id
                        );
                        
                        if (foundProject) {
                            setProject(foundProject);
                        } else {
                            setError('ไม่พบผลงานที่ค้นหา');
                        }
                    } else {
                        setError('ไม่สามารถดึงข้อมูลได้');
                    }
                } catch (err) {
                    setError('เกิดข้อผิดพลาดในการดึงข้อมูล');
                    console.error('Error fetching project:', err);
                } finally {
                    setLoading(false);
                }
            };

            fetchProject();
        }
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="text-center py-20">
                    <p className="text-lg text-gray-600">กำลังโหลดข้อมูล...</p>
                </div>
            </Layout>
        );
    }

    if (error || !project) {
        return (
            <Layout>
                <div className="text-center py-20">
                    <p className="text-lg text-red-600">{error || 'ไม่พบผลงานที่ค้นหา'}</p>
                    <Link href="/portfolio" className="text-blue-600 hover:underline mt-4 block">
                        กลับไปหน้าผลงานทั้งหมด
                    </Link>
                </div>
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
                    กลับไปหน้าผลงานทั้งหมด
                </Link>

                <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-12 relative">
                    <Image
                        src={project.cover || '/image/default-project.jpg'}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="z-10"
                        priority
                    />
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {project.summary || project.description}
                    </p>
                </div>

                <div className="max-w-md mx-auto text-center mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-bold"
                            >
                                {tag}
                            </span>
                        ))}
                        {project.techStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-bold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            ภาพรวมโครงการ
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                            {project.description || project.summary || 'รายละเอียดโครงการ'}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            เทคโนโลยีที่ใช้
                        </h2>
                        <ul className="space-y-3">
                            {project.techStack.map((tech: string) => (
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
