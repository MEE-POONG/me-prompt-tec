import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Calendar, Globe, Briefcase } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  problemStatement?: string;
  solution?: string;
  client?: string;
  industry?: string;
  techStack: string[];
  status: string;
  featuredImage?: string;
  gallery: string[];
  demoUrl?: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProjectsResponse {
  success: boolean;
  data: Project[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const statusColors = {
  PLANNING: 'bg-blue-100 text-blue-800',
  IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
  COMPLETED: 'bg-green-100 text-green-800',
  ON_HOLD: 'bg-gray-100 text-gray-800',
};

const statusText = {
  PLANNING: 'วางแผน',
  IN_PROGRESS: 'กำลังดำเนินการ',
  COMPLETED: 'เสร็จสิ้น',
  ON_HOLD: 'พักงาน',
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    fetchProjects();
  }, [currentPage, filterStatus]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const params: any = {
        page: currentPage,
        limit: 9,
      };

      if (filterStatus) {
        params.status = filterStatus;
      }

      const response = await axios.get<ProjectsResponse>('/api/v1/projects', {
        params,
      });

      if (response.data.success) {
        setProjects(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading && projects.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchProjects}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ลองอีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">โครงการของเรา</h1>
          <p className="mt-2 text-gray-600">
            ผลงานและโครงการที่เราได้พัฒนาและดำเนินการ
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setFilterStatus('');
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg ${
              filterStatus === ''
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ทั้งหมด
          </button>
          {Object.entries(statusText).map(([key, value]) => (
            <button
              key={key}
              onClick={() => {
                setFilterStatus(key);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg ${
                filterStatus === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">ไม่พบข้อมูลโครงการ</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {project.featuredImage ? (
                      <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Briefcase className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          statusColors[project.status as keyof typeof statusColors]
                        }`}
                      >
                        {statusText[project.status as keyof typeof statusText]}
                      </span>
                      {project.industry && (
                        <span className="text-xs text-gray-500">
                          {project.industry}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    {project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(project.startDate)}</span>
                      </div>
                      {project.demoUrl && (
                        <div className="flex items-center gap-1 text-blue-600">
                          <Globe className="w-3 h-3" />
                          <span>Demo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ก่อนหน้า
                </button>
                <span className="px-4 py-2 text-gray-700">
                  หน้า {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ถัดไป
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
