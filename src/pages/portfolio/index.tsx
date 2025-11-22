import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Project } from "@/types/project";

export default function Portfolio() {
  // State สำหรับข้อมูล Projects จาก API
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects data from API
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
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Loading state
  if (loading) {
    return (
      <Layout>
        <Head>
          <title>Portfolio | ผลงานทั้งหมดของเรา</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <style jsx>{`
            @keyframes tech-spin {
              0% {
                transform: rotate(0deg);
                opacity: 0.6;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: rotate(360deg);
                opacity: 0.6;
              }
            }
            .animate-tech-spin {
              animation: tech-spin 1.2s ease-in-out infinite;
            }
          `}</style>

          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-gray-300"></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-tech-spin"></div>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state
  if (error) {
    return (
      <Layout>
        <Head>
          <title>Portfolio | ผลงานทั้งหมดของเรา</title>
        </Head>
        <div className="bg-white py-20 text-center">
          <p className="text-lg text-red-600">{error}</p>
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
      <div className="bg-white py-30 text-center ">
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-600 from-35% via-violet-700  to-red-400 bg-clip-text text-transparent mb-4 ">
          ผลงานทั้งหมด
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-16">
          เราสร้างสรรค์เว็บไซต์และแอปพลิเคชันที่ตอบโจทย์ธุรกิจของคุณด้วยเทคโนโลยีล่าสุด
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-linear-to-br from-blue-400 to-purple-600 flex items-center justify-center relative">
                  {project.cover ? (
                    <img
                      className="h-48 w-full object-cover absolute inset-0"
                      src={project.cover}
                      alt={project.title}
                    />
                  ) : (
                    <div className="text-white text-center p-4">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 opacity-50"
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
                      <p className="text-sm opacity-75">Project Image</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techStack.slice(0, 2).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.summary ||
                      project.description ||
                      "โปรเจคที่น่าสนใจ"}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
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
