// pages/portfolio/[id].tsx

import React, { useEffect, useState } from 'react'; // นำเข้า React และ hooks ที่ใช้ (useEffect, useState)
import Head from 'next/head'; // สำหรับจัดการส่วน head ของหน้า (เช่น title, meta)
import Link from 'next/link'; // ใช้สำหรับลิงก์ภายใน Next.js
import Image from 'next/image'; // คอมโพเนนต์รูปภาพที่ช่วย optimize รูปภาพของ Next.js
import Layout from '@/components/Layout'; // นำเข้า layout หลักของหน้า
import { Project, featuredProjects } from '@/data/portfolio'; // นำเข้า type Project และข้อมูล project ที่เตรียมไว้
import { useRouter } from 'next/router'; // Hook สำหรับดึงพารามิเตอร์จาก URL

const PortfolioDetailPage: React.FC = () => {
    const router = useRouter(); // สร้างตัวแปร router สำหรับเข้าถึง query parameters
    const { id } = router.query; // ดึง id ของ project จาก URL (เช่น /portfolio/1 จะได้ id=1)
    const [project, setProject] = useState<Project | undefined>(undefined); // สร้าง state เก็บข้อมูล project ปัจจุบัน (เริ่มต้นเป็น undefined)

    // useEffect นี้จะทำงานเมื่อ id ใน URL เปลี่ยนแปลง (หรือเมื่อ component mount)
    useEffect(() => {
        if (typeof id === 'string') { // เช็คว่า id เป็น string ก่อน (เพราะ router query อาจเป็น array หรือ undefined ได้)
            console.log('ID:', id); // แสดง id ที่ได้ใน console (ช่วย debug)
            console.log('Projects:', featuredProjects); // แสดงรายชื่อโปรเจกต์ทั้งหมด (ช่วย debug)
            // ค้นหา project ใน featuredProjects ที่มี id ตรงกับ id จาก URL (แปลงเป็น string ก่อนเทียบ)
            const project = featuredProjects.find((proj) => proj.id.toString() === id);
            console.log('Found project:', project); // แสดง project ที่เจอใน console (ช่วย debug)
            setProject(project); // เก็บข้อมูล project ที่เจอใน state
        }
    }, [id]); // รัน effect นี้ทุกครั้งที่ id เปลี่ยน

    // ถ้ายังไม่เจอ project (เช่น กำลังโหลด) ให้แสดงข้อความ loading
    if (!project) {
        return (
            <Layout>
                <div className="text-center py-20">กำลังโหลดข้อมูล...</div> {/* ข้อความแสดงสถานะ loading */}
            </Layout>
        );
    }

    // ถ้าเจอ project แล้ว จะแสดงรายละเอียดหน้า portfolio
    return (
        <Layout>
            <Head>
                {/* ตั้งชื่อ title ของหน้า ตามชื่อ project */}
                <title>{project.title} | รายละเอียดผลงาน</title>
            </Head>

            {/* Container หลักของเนื้อหา */}
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                {/* ลิงก์กลับไปยังหน้ารวม portfolio */}
                <Link
                    href="/portfolio"
                    className="text-blue-600 font-medium hover:underline mb-8 block w-fit"
                >
                    ← กลับไปหน้าผลงานทั้งหมด
                </Link>

                {/* ส่วนแสดงรูปภาพ cover ของ project */}
                <div
                    key={project.id} // key สำหรับ React reconciliation (แก้ไขประสิทธิภาพ rendering)
                    className={`w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-12 relative ${project.id}`} // style div รูปภาพ
                >
                    <Image
                        src={project.imageSrc} // ที่อยู่รูปภาพ
                        alt={`Cover image for ${project.title}`} // ข้อความ alt สำหรับ accessibility
                        fill // ใช้ fill แทน layout="fill"
                        style={{ objectFit: 'cover' }} // ให้รูปภาพครอบเต็มพื้นที่โดยไม่ผิดสัดส่วน
                        className="z-10" // z-index
                        priority // โหลดรูปภาพนี้ก่อนหน้าอื่น ๆ (เพื่อประสิทธิภาพ)
                    />
                </div>

                {/* ส่วนแสดงชื่อและคำอธิบายของ project */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {project.title} {/* ชื่อ project */}
                    </h1>
                    <p className="text-xl text-gray-600">{project.description}</p> {/* คำอธิบาย project */}
                </div>

                {/* ส่วนแสดงแท็ก tags1 และ tags2 */}
                <div className="max-w-md mx-auto text-center mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {/* map แสดง tag แต่ละตัวใน tags1 */}
                        {project.tags1.map((tag) => (
                            <span
                                key={tag} // key ของแต่ละ tag
                                className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-bold"
                            >
                                {tag}
                            </span>
                        ))}
                        {/* map แสดง tag แต่ละตัวใน tags2 */}
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

                {/* ส่วนรายละเอียดของ project */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* คอลัมน์ซ้าย (กว้าง 2 ช่อง) แสดงภาพรวมของโครงการ */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            ภาพรวมโครงการ
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {project.detail} {/* รายละเอียดภาพรวม */}
                        </p>
                    </div>

                    {/* คอลัมน์ขวา แสดงเทคโนโลยีที่ใช้ใน project */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
                            เทคโนโลยีที่ใช้
                        </h2>
                        <ul className="space-y-3">
                            {/* map แสดง techStack ทีละตัว */}
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
