/**
 * Homepage
 * ME PROMPT TECHNOLOGY
 */

import Link from 'next/link';

export default function HeroSection() {
  return (
     
      <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              มีพร้อมเทคโนโลยี
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              ME PROMPT TECHNOLOGY
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              สร้างสรรค์โซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจและพัฒนาคนรุ่นใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                ดูผลงานของเรา
              </Link>
              <Link
                href="/internship"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-white/20"
              >
                ร่วมงานกับเรา
              </Link>
            </div>
          </div>
        </div>
      </section>
  )}