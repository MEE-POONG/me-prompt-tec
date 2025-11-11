import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-30">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-110">
                ME PROMPT
              </span>
              <span className="hidden md:flex text-sm text-yellow-600 font-bold transition-all duration-300 hover:scale-110">
                มีพร้อมเทคโนโลยี
              </span>
            </Link>
          </div>

          {/* desktop responsive */}
          <div className="hidden md:block justify-item-center space-x-10">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
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

          {/* hamberger dropdown */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* mobile responsive */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  เกี่ยวกับเรา
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  ผลงาน
                </Link>
                <Link
                  href="/internship"
                  className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  ฝึกงาน
                </Link>
                <Link
                  href="/partnerships"
                  className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  พันธมิตร
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  ติดต่อเรา
                </Link>
              </div>
            </div>
          )}
      </div>
    </nav>
  );
}
