import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">ME PROMPT TECHNOLOGY</h3>
            <p className="text-gray-700 text-sm">
              มีพร้อมเทคโนโลยี
              <br />
              พันธมิตรดิจิทัลของคุณ
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">เมนูหลัก</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 transition-all duration-300 hover:scale-125 hover:text-yellow-600"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-700 transition-all duration-300 hover:scale-125 hover:text-yellow-600"
                >
                  ผลงาน
                </Link>
              </li>
              <li>
                <Link
                  href="/internship"
                  className="text-gray-700 transition-all duration-300 hover:scale-125 hover:text-yellow-600"
                >
                  ฝึกงาน
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-700 transition-all duration-300 hover:scale-125 hover:text-yellow-600"
                >
                  พันธมิตร
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">บริการ</h4>
            <ul className="space-y-2 text-sm text-gray-700 ">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
            <ul className="space-y-2 text-sm text-gray-700 ">
              <li>Email: contact@meprompt.tech</li>
              <li>Tel: +66-XX-XXX-XXXX</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700  mt-8 pt-8 text-center text-sm text-gray-700 ">
          <p>
            &copy; {new Date().getFullYear()} ME PROMPT TECHNOLOGY COMPANY
            LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
