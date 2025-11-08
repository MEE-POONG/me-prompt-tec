import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-110">
                ME PROMPT
              </span>
              <span className="text-sm text-yellow-600 font-bold transition-all duration-300 hover:scale-110">
                มีพร้อมเทคโนโลยี
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold"
            >
              ผลงาน
            </Link>
            <Link
              href="/internship"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold"
            >
              ฝึกงาน
            </Link>
            <Link
              href="/partnerships"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold"
            >
              พันธมิตร
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
