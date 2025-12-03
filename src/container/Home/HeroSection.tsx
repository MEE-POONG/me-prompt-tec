import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  onScrollToNextSection: () => void;
}

export default function HeroSection({ onScrollToNextSection }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-slate-900">
      {/* BG ชั้นหลัก: mesh gradient โทนโลโก้แบบสดใสขึ้น */}
      <div
        className="
          absolute inset-0 -z-40
          bg-[radial-gradient(circle_at_0%_0%,#06b6d4_0,#e0f2fe_30%,transparent_70%),radial-gradient(circle_at_100%_0%,#a855f7_0,#f5d0fe_35%,transparent_70%),radial-gradient(circle_at_0%_100%,#f97316_0,#fed7aa_35%,transparent_75%),radial-gradient(circle_at_100%_100%,#ec4899_0,#f9a8d4_35%,transparent_75%)]
        "
      />

      {/* ชั้นฟุ้งสีขาว – ยังอยู่ แต่บางลงหน่อยให้สีสดขึ้น */}
      <div className="absolute inset-0 -z-30 bg-linear-to-b from-white/50 via-white/5 to-white/70" />

      {/* ชั้นจุด/star เล็ก ๆ */}
      <div className="absolute inset-0 -z-20 opacity-50 mix-blend-screen bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[18px_18px]" />

      {/* Bubble animation */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <BubbleBackground
          interactive={true}
          className="absolute inset-0 mix-blend-screen"
        />
      </div>

      {/* floating blobs ปรับสีให้สดนิดหน่อย */}
      <div className="pointer-events-none absolute -top-32 -left-12 h-72 w-72 rounded-full bg-cyan-300/60 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute bottom-[-120px] -right-10 h-80 w-80 rounded-full bg-pink-400/55 blur-3xl animate-blob"
        style={{ animationDelay: "6s", animationDuration: "24s" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/50 blur-3xl animate-blob"
        style={{ animationDelay: "12s", animationDuration: "26s" }}
      />

      {/* เนื้อหา */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* ฝั่งซ้าย: ข้อความ */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-5 text-transparent bg-clip-text bg-linear-to-r from-[hsl(229,26%,29%)] via-[#4f46e5] to-[#ec4899] drop-shadow-[0_10px_40px_rgba(15,23,42,0.35)]">
              มีพร้อมเทคโนโลยี
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-linear-to-r from-[#0ea5e9] via-[#6366f1] to-[#fb7185] drop-shadow-sm">
              ME PROMPT TECHNOLOGY
            </h2>

            <p className="text-sm md:text-base lg:text-lg mb-9 md:mb-10 text-slate-700 max-w-xl lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
              เราออกแบบโซลูชันดิจิทัลแบบครบวงจร ตั้งแต่ระบบหลังบ้านจนถึงประสบการณ์ของผู้ใช้
              เพื่อช่วยให้แบรนด์ของคุณก้าวทันโลกเทคโนโลยี และต่อยอดศักยภาพของทีมในระยะยาว
            </p>

            {/* ปุ่ม – ทำให้เล็กลง */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="group relative px-6 py-3 rounded-full bg-linear-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold text-sm md:text-base shadow-lg shadow-fuchsia-300/40 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                ดูผลงานของเรา
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/internship"
                className="group px-6 py-3 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md text-slate-800 font-medium text-sm md:text-base hover:border-fuchsia-400 hover:text-fuchsia-600 hover:bg-white transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                ร่วมงานกับเรา
              </Link>
            </div>
          </div>

          {/* ฝั่งขวา: Me.png ใหญ่ขึ้น + hover แล้วขยาย */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div
              className="group relative w-full max-w-4xl animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              {/* glow เบา ๆ ด้านหลัง (ถ้าอยากปิดค่อยคอมเมนต์บรรทัดนี้ทีหลังได้) */}
              {/* <div className="pointer-events-none absolute inset-0 translate-y-10 rounded-[40px] bg-linear-to-tr from-[#0ea5e9]/16 via-[#6366f1]/18 to-[#ec4899]/16 blur-3xl" /> */}

              <Image
                src="/image/Me.png"
                alt="ME Prompt Technology Illustration"
                width={1400}
                height={900}
                priority
                // className="relative w-full h-auto select-none drop-shadow-[0_18px_60px_rgba(15,23,42,0.38)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div
          onClick={onScrollToNextSection}
          className="group flex flex-col items-center cursor-pointer text-slate-400 hover:text-fuchsia-600 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            Scroll Down
          </span>
          <div className="p-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm group-hover:border-fuchsia-400 transition-all duration-300 animate-bounce shadow-sm">
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
