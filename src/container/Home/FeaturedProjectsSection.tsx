import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (data.success) {
          // ❗ ดึงข้อมูลเหมือนเดิม แค่ 3 โปรเจกต์แรก
          setProjects(data.data.projects.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching featured projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* แสงฟุ้งหลังพื้นหลังเบา ๆ ให้ดูมีมิติ */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.2),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* หัวข้อ */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-blue-600 via-violet-700 to-red-400 bg-clip-text text-transparent mb-4">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            สำรวจโปรเจกต์จริงที่เราออกแบบและพัฒนาเฉพาะทางด้วยเทคโนโลยีสมัยใหม่
เพื่อช่วยให้ธุรกิจหลากหลายอุตสาหกรรมก้าวทันโลกดิจิทัลและเติบโตได้อย่างมีประสิทธิภาพ
          </p>
        </div>

        {/* การ์ดโปรเจกต์ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative bg-white/80 backdrop-blur rounded-3xl border border-slate-100/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300"
            >
              {/* โซนรูป */}
              <div className="relative h-52 w-full overflow-hidden bg-linear-to-br from-sky-400/60 via-blue-500/70 to-violet-600/70">
                {project.cover ? (
                  <>
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* เงาไล่สีด้านบนให้ดูฟิวเจอร์ริสติกหน่อย */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent mix-blend-multiply" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                    <svg
                      className="w-14 h-14 mb-2 opacity-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs tracking-wide uppercase opacity-70">
                      Project Preview
                    </p>
                  </div>
                )}
              </div>

              {/* เนื้อหาโปรเจกต์ */}
              <div className="p-6 sm:p-7">
                {/* แท็ก */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.tags || []).slice(0, 2).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-sky-50 text-sky-700 border border-sky-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {(project.techStack || []).slice(0, 2).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                  {project.summary ||
                    project.description ||
                    "โปรเจ็กต์ที่เราพัฒนาด้วยเทคโนโลยีสมัยใหม่ เพื่อตอบโจทย์ธุรกิจจริง"}
                </p>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center text-sm font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 group-hover:from-blue-500 group-hover:to-pink-400"
                >
                  <span>ดูรายละเอียด</span>
                  <span className="ml-1.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ปุ่มดูทั้งหมด */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm md:text-base font-semibold text-white bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 shadow-lg shadow-fuchsia-300/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
