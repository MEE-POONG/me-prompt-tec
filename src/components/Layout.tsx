/**
 * Layout Component
 * ME PROMPT TECHNOLOGY
 */

import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'มีพร้อมท์เทคโนโลยี - ME PROMPT TECHNOLOGY',
  description = 'บริษัทพัฒนาซอฟต์แวร์และโซลูชันดิจิทัล ผู้เชี่ยวชาญด้าน Web & Mobile Development, AI และ Automation',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600 transition-all duration-300 hover:scale-110">ME PROMPT</span>
                  <span className="text-sm text-yellow-600 font-bold transition-all duration-300 hover:scale-110">มีพร้อมเทคโนโลยี</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold">
                  เกี่ยวกับเรา
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold">
                  ผลงาน
                </Link>
                <Link href="/internship" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold">
                  ฝึกงาน
                </Link>
                <Link href="/partnerships" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold">
                  พันธมิตร
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:scale-110 font-bold">
                  ติดต่อเรา
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <h3 className="text-xl font-bold mb-4">ME PROMPT TECHNOLOGY</h3>
                <p className="text-gray-400 text-sm">
                  มีพร้อมเทคโนโลยี<br />
                  พันธมิตรดิจิทัลของคุณ
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">เมนูหลัก</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
                  <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">ผลงาน</Link></li>
                  <li><Link href="/internship" className="text-gray-400 hover:text-white transition-colors">ฝึกงาน</Link></li>
                  <li><Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors">พันธมิตร</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">บริการ</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Web Development</li>
                  <li>Mobile Apps</li>
                  <li>AI Solutions</li>
                  <li>Consulting</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">ติดต่อเรา</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Email: contact@meprompt.tech</li>
                  <li>Tel: +66-XX-XXX-XXXX</li>
                  <li className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} ME PROMPT TECHNOLOGY COMPANY LIMITED. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
