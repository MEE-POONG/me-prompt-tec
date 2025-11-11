/**
 * Homepage
 * ME PROMPT TECHNOLOGY
 */

import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeroSectionProps {
  onScrollToNextSection: () => void;
}

export default function HeroSection({
  onScrollToNextSection,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-br from-green-400 via-blue-600 to-purple-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/image/linepattern.png')",
        }}
      />

      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-gray-800 text-shadow-2xs">
            มีพร้อมเทคโนโลยี
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 text-shadow-gray-800 text-shadow-2xs">
            ME PROMPT TECHNOLOGY
          </p>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto text-shadow-gray-800 text-shadow-2xs">
            สร้างสรรค์โซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจและพัฒนาคนรุ่นใหม่
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="inline-block bg-white text-gray-600 px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 hover:text-amber-50 transition-all duration-300 hover:scale-110"
            >
              ดูผลงานของเรา
            </Link>
            <Link
              href="/internship"
              className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600  border-2 border-white/20 transition-all duration-300 hover:scale-110"
            >
              ร่วมงานกับเรา
            </Link>
          </div>
          <div className="flex justify-center mt-30 ">
            <div 
              onClick={onScrollToNextSection} // 3. เรียกใช้ฟังก์ชันที่ส่งมาจาก Parent
              className="text-white hover:text-yellow-300 cursor-pointer" // เพิ่ม cursor-pointer เพื่อบ่งบอกว่าคลิกได้
            >
              <div className="animate-bounce w-6 h-6">
                <ChevronDown size={50} fontWeight={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
