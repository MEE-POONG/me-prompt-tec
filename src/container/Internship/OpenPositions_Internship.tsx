import Link from "next/link";
import React from "react";

export default function OpenPositions_Internship() {
  return (
    <section id="open-positions" className="py-20 bg-gray-100">
      {" "}
      {/* 🚨 เพิ่ม id="open-positions" */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          โปรแกรมฝึกงาน (Internship)
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {" "}
            {/* 🚨 ปรับลดขนาดตัวอักษร */}
            เริ่มต้นเส้นทางอาชีพของคุณกับเรา
            เรียนรู้จากโปรเจกต์จริงและทีมงานมืออาชีพ
          </p>
        </h2>

        <div className="space-y-6">
          {/* 🚨 3. เปลี่ยน Card เป็น bg-white (ขาวบนเทา) และเพิ่ม Hover Effect */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold text-blue-800">
                Frontend Developer (Intern)
              </h3>
              <p className="text-gray-600 mt-1">
                เรียนรู้ React, Next.js, และ Tailwind CSS
              </p>
            </div>
            <Link
              href="/apply/frontend"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
            >
              สมัคร
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold text-blue-800">
                Backend Developer (Intern)
              </h3>
              <p className="text-gray-600 mt-1">
                เรียนรู้ Node.js, Prisma, และ Database
              </p>
            </div>
            <Link
              href="/apply/backend"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
            >
              สมัคร
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-bold text-blue-800">
                UI/UX Designer (Intern)
              </h3>
              <p className="text-gray-600 mt-1">
                เรียนรู้ Figma, Wireframing, และ Prototyping
              </p>
            </div>
            <Link
              href="/apply/uiux"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
            >
              สมัคร
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
