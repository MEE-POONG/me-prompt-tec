import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, Search } from "lucide-react";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/projects");
        const data = await response.json();
        if (data.success) {
          setProjects(data.data.projects);
        } else {
          setError("ไม่สามารถดึงข้อมูลได้");
        }
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Loading State
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 size={40} className="animate-spin text-purple-600" />
            <p className="text-slate-500 font-medium">กำลังโหลดผลงาน...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Portfolio | ผลงานทั้งหมดของเรา</title>
        <meta name="description" content="รวมผลงานที่เราได้พัฒนาให้กับลูกค้า" />
      </Head>

      {/* Main Container: Light Theme with Holographic Gradients */}
      <div className="min-h-screen bg-slate-50 relative overflow-hidden text-slate-800 font-sans">
        
        {/* Background Decor (แสงฟุ้ง ม่วง-ฟ้า-ชมพู เหมือนหน้า Home) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px] mix-blend-multiply filter opacity-70 animate-pulse" />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[100px] mix-blend-multiply filter opacity-70 animate-pulse delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-300/30 rounded-full blur-[120px] mix-blend-multiply filter opacity-70 animate-pulse delay-700" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* ลบส่วน Badge "Our Masterpieces" ออกแล้วตามที่ขอครับ */}
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 drop-shadow-sm">
                  ผลงานทั้งหมด
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                เราสร้างสรรค์ <span className="font-semibold text-purple-600">Digital Experience</span> ที่เหนือกว่า 
                ด้วยเทคโนโลยีที่ทันสมัยและการออกแบบที่ตอบโจทย์ธุรกิจ
              </p>
            </motion.div>
          </div>

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 bg-red-50 inline-block px-6 py-3 rounded-xl border border-red-100 shadow-sm">{error}</p>
            </div>
          )}

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/portfolio/${project.slug}`}>
                  {/* Card Container: Light Glassmorphism */}
                  <div className="h-full bg-white/70 border border-white/60 rounded-3xl overflow-hidden backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                    
                    {/* Image Area */}
                    <div className="relative h-60 w-full overflow-hidden">
                      {project.cover ? (
                        <Image
                          src={project.cover}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                           <div className="flex flex-col items-center gap-2">
                             <div className="w-12 h-12 bg-slate-200 rounded-full" />
                             <span>No Image</span>
                           </div>
                        </div>
                      )}
                      
                      {/* Overlay Gradient on Image (Light to Dark) */}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                          {project.clientSector || "Project"}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex flex-col grow relative">
                      {/* Decorative Gradient Line */}
                      <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-purple-200 to-transparent" />

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[10px] font-semibold px-2 py-1 rounded-md bg-purple-50 text-purple-600 border border-purple-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm line-clamp-2 mb-6 grow leading-relaxed">
                        {project.summary || project.description || "รายละเอียดโครงการ..."}
                      </p>

                      {/* Footer / Action */}
                      <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
                        <span className="text-xs text-slate-400 font-semibold tracking-wide">
                           ME PROMPT TEC
                        </span>
                        <span className="flex items-center gap-1 text-sm font-bold text-slate-700 group-hover:text-purple-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-lg group-hover:bg-purple-50">
                          ดูรายละเอียด <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {!loading && projects.length === 0 && !error && (
             <div className="text-center py-24 px-6 border-2 border-dashed border-slate-200 rounded-3xl bg-white/50">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search size={24} />
                </div>
                <p className="text-slate-500 text-lg font-medium">ยังไม่มีผลงานที่จะแสดงในขณะนี้</p>
                <p className="text-slate-400 text-sm mt-1">โปรดติดตามผลงานอัปเดตเร็วๆ นี้</p>
             </div>
          )}

        </div>
      </div>
    </Layout>
  );
}