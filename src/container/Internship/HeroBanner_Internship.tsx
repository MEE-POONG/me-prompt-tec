import Link from "next/link";
import React from "react";

export default function HeroBanner_Internship() {
  return (
    <section className="relative py-20 h-96 flex items-center justify-center overflow-hidden">
      
      {/* =========================================
          BACKGROUND
         ========================================= */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#f5f3ff] via-[#fdf2ff] to-[#eff6ff]" />
      <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.35),transparent_55%)]" />

      {/* =========================================
          CONTENT
         ========================================= */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* ✅ FIX: เพิ่ม py-4 (กันสระขาด) และ leading-relaxed (จัดระยะบรรทัด) */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500 drop-shadow-sm py-4 leading-relaxed">
          โอกาสเริ่มต้นอาชีพของคุณอยู่ที่นี่
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-slate-700 mb-10">
          มาร่วมสร้างสรรค์และเติบโตไปกับทีมของเรา
        </p>

        <Link
          href="#open-positions"
          className="inline-block rounded-full px-8 py-3.5 text-lg font-semibold text-white bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-300/70 transition-transform duration-200 hover:-translate-y-1 hover:brightness-110"
        >
          ดูโปรแกรมฝึกงาน
        </Link>
      </div>
    </section>
  );
}