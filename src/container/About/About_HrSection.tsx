import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function About_HrSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('/img/linepattern.png')",
        }}
      />

      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-60">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 text-shadow-2xs">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-700 text-shadow-gray-800 text-shadow-2xs">
            ME PROMPT TECHNOLOGY
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto text-shadow-gray-800 text-shadow-2xs">
            สร้างสรรค์โซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจและพัฒนาคนรุ่นใหม่
          </p>
        </div>

        {/* arrow head */}
        <div className="flex justify-center mt-4 ">
          <a href="#PermissionSection">
            <img
              className="animate-bounce "
              src="/img/Arrwh.png"
              alt="arrowhead"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
