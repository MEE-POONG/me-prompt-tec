import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch("/api/v1/public/projects");
  //       const data = await response.json();

  //       if (data.success) {
  //         setProjects(data.data.projects.slice(0, 3)); // ดึงแค่ 3 โครงการแรก
  //       }
  //     } catch (error) {
  //       console.error("Error fetching featured projects:", error);
  //     }
  //   }
  //   fetchProjects();;
  // }, []);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ชมตัวอย่างผลงานที่เราได้พัฒนาให้กับลูกค้าหลากหลายธุรกิจ
          </p>
        </div>

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

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500 hover:text-amber-50 transition-all duration-300 hover:scale-110"
          >
            ดูผลงานทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
