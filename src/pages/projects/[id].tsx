import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import {
  Calendar,
  Globe,
  ArrowLeft,
  Briefcase,
  CheckCircle,
  Clock,
  User,
} from 'lucide-react';

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

interface ProjectResponse {
  success: boolean;
  data: Project;
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

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ProjectResponse>(
        `/api/v1/projects/${id}`
      );

      if (response.data.success) {
        setProject(response.data.data);
        setSelectedImage(response.data.data.featuredImage || null);
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
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error || 'ไม่พบข้อมูลโครงการ'}</p>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            กลับไปหน้ารายการ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            กลับไปหน้ารายการ
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h1>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    statusColors[project.status as keyof typeof statusColors]
                  }`}
                >
                  {statusText[project.status as keyof typeof statusText]}
                </span>
              </div>
              <p className="text-gray-600 text-lg">{project.description}</p>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                รูปภาพ
              </h2>
              {selectedImage ? (
                <div className="space-y-4">
                  <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={selectedImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {project.gallery.length > 0 && (
                    <div className="grid grid-cols-4 gap-2">
                      {[project.featuredImage, ...project.gallery]
                        .filter((img) => img)
                        .map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(img!)}
                            className={`relative h-20 bg-gray-200 rounded-lg overflow-hidden ${
                              selectedImage === img
                                ? 'ring-2 ring-blue-600'
                                : ''
                            }`}
                          >
                            <img
                              src={img!}
                              alt={`${project.title} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                  <Briefcase className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  ปัญหาที่พบ
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  แนวทางแก้ไข
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                เทคโนโลยีที่ใช้
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ข้อมูลโครงการ
              </h3>
              <div className="space-y-4">
                {project.client && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <User className="w-4 h-4" />
                      <span>ลูกค้า</span>
                    </div>
                    <p className="text-gray-900 font-medium">{project.client}</p>
                  </div>
                )}

                {project.industry && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Briefcase className="w-4 h-4" />
                      <span>อุตสาหกรรม</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {project.industry}
                    </p>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>วันที่เริ่มต้น</span>
                  </div>
                  <p className="text-gray-900 font-medium">
                    {formatDate(project.startDate)}
                  </p>
                </div>

                {project.endDate && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>วันที่เสร็จสิ้น</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {formatDate(project.endDate)}
                    </p>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>อัพเดทล่าสุด</span>
                  </div>
                  <p className="text-gray-900 font-medium">
                    {formatDate(project.updatedAt)}
                  </p>
                </div>
              </div>
            </div>

            {/* Demo Link */}
            {project.demoUrl && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Globe className="w-5 h-5" />
                  ดูตัวอย่างโครงการ
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
