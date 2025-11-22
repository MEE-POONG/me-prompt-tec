/**
 * Homepage
 * ME PROMPT TECHNOLOGY
 */
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

interface HeroSectionProps {
  onScrollToNextSection: () => void;
}

export default function HeroSection({
  onScrollToNextSection,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Layer 1: Bubble Background */}
      <BubbleBackground interactive={true} className="absolute inset-0" />

      {/* Optional overlay เพื่อให้เนื้อหาอ่านง่าย */}
      <div className="absolute inset-0 bg-black/20" />

      {/* เนื้อหา */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-gray-800 text-shadow-2xs">
          มีพร้อมเทคโนโลยี
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white text-shadow-gray-800 text-shadow-2xs">
          ME PROMPT TECHNOLOGY
        </p>
        <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto text-shadow-gray-800 text-shadow-2xs">
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
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 border-2 border-white/20 transition-all duration-300 hover:scale-110"
          >
            ร่วมงานกับเรา
          </Link>
        </div>

        <div className="flex justify-center mt-30">
          <div
            onClick={onScrollToNextSection}
            className="text-white hover:text-yellow-300 cursor-pointer"
          >
            <div className="animate-bounce w-6 h-6">
              <ChevronDown size={50} fontWeight={70} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
