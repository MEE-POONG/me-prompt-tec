import React from "react";

export default function NewsletterSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* BG ไล่สีโทนอ่อนแบบ Hero */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#f5f3ff] via-[#fdf2ff] to-[#eff6ff]" />
      <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.35),transparent_55%)]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500">
          รับข่าวสารล่าสุดจากเรา
        </h2>

        <p className="text-base md:text-lg text-slate-700 mb-8">
          สมัครรับจดหมายข่าวเพื่อไม่พลาดข้อมูลอัปเดตเกี่ยวกับเทคโนโลยีและบริการใหม่ ๆ จาก Me Prompt
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="กรอกอีเมลของคุณ"
            className="w-full sm:flex-1 rounded-full border border-sky-200 bg-white/80 px-5 py-3 text-sm md:text-base text-slate-800 shadow-md shadow-sky-100/70 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full sm:w-auto rounded-full px-8 py-3 text-sm md:text-base font-semibold text-white bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-300/70 transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            สมัคร
          </button>
        </form>

        <p className="mt-4 text-xs md:text-sm text-slate-500">
          เราจะไม่ส่งสแปมและเคารพความเป็นส่วนตัวของคุณ
        </p>
      </div>
    </section>
  );
}
