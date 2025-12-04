import { ArrowRight } from "lucide-react"; // ❌ ลบ ChevronDown ออกเพราะไม่ได้ใช้แล้ว
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onScrollToNextSection: () => void;
}

export default function HeroSection({ onScrollToNextSection }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900 pt-32 md:pt-20">
      
      {/* =========================================
          1. BACKGROUND: Clean & Bright
         ========================================= */}
      
      {/* พื้นหลังขาวสะอาด */}
      <div className="absolute inset-0 -z-50 bg-white" />

      {/* Aurora Blobs */}
      <div className="absolute inset-0 -z-40 overflow-hidden opacity-60">
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ x: [20, -20, 20], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-pink-200/40 rounded-full blur-[120px] mix-blend-multiply" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-30 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />


      {/* =========================================
          2. CONTENT
         ========================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ----- ฝั่งซ้าย: Text Content ----- */}
          <div className="flex-1 text-center lg:text-left z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.15]">
                <span className="block text-slate-800 mb-2">
                  มีพร้อมเทคโนโลยี
                </span>
                
                {/* Gradient Text */}
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500 drop-shadow-sm pb-1">
                  ME PROMPT TECHNOLOGY
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                เราออกแบบโซลูชันดิจิทัลแบบครบวงจร ตั้งแต่ระบบหลังบ้านจนถึงประสบการณ์ของผู้ใช้ 
                เพื่อช่วยให้แบรนด์ของคุณ <strong className="text-slate-800 font-semibold">ก้าวทันโลกเทคโนโลยี</strong>
              </p>

              {/* ปุ่ม */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Link
                  href="/portfolio"
                  className="group relative px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-base shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-violet-700 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    ดูผลงานของเรา <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/internship"
                  className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-base hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
                >
                  ร่วมงานกับเรา
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ----- ฝั่งขวา: Image ----- */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <motion.div
              animate={{ 
                y: [-15, 15, -15], 
              }} 
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[500px] lg:max-w-[750px]"
            >
              <Image
                src="/image/Me.png"
                alt="ME Prompt Technology Illustration"
                width={1400}
                height={900}
                priority
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-linear-to-tr from-blue-200/50 to-pink-200/50 blur-[80px] rounded-full -z-10" />
          </div>

        </div>
      </div>
      
    </section>
  );
}