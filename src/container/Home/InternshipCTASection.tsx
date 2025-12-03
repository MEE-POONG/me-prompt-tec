import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { BookCopy, Cpu, Star, UserRound } from "lucide-react";
import Link from "next/link";

const joinicons = [
  {
    icon: <BookCopy className="w-8 h-8 text-sky-500" />,
    title: "โปรเจกต์จริง",
  },
  {
    icon: <Cpu className="w-8 h-8 text-sky-500" />,
    title: "เทคโนโลยีล่าสุด",
  },
  {
    icon: <UserRound className="w-8 h-8 text-sky-500" />,
    title: "ทีมมืออาชีพ",
  },
  {
    icon: <Star className="w-8 h-8 text-sky-500" />,
    title: "ประสบการณ์",
  },
];

export default function InternshipCTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🔵 พื้นหลังแบบเดียวกับ Hero / PermissionSection */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-[#f5f3ff] via-[#fdf2ff] to-[#eff6ff]" />
      <div className="absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.35),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.35),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500">
          เข้าร่วมทีมกับเรา
        </h2>

        <p className="text-lg md:text-xl mb-10 text-slate-700 max-w-3xl mx-auto">
          เปิดรับนักศึกษาฝึกงาน/สหกิจศึกษา ร่วมทำโปรเจกต์จริง
          เรียนรู้จากผู้เชี่ยวชาญ พัฒนาทักษะเพื่ออนาคตในอุตสาหกรรมเทคโนโลยี
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 justify-items-center">
          {joinicons.map((joinicon, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center mb-10 md:mb-0"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 border border-sky-400 shadow-lg shadow-sky-200/70 mb-4">
                {joinicon.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                {joinicon.title}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/internship"
          className="inline-block rounded-full bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-fuchsia-300/70 transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          ดูข้อมูลโปรแกรมฝึกงาน
        </Link>
      </div>
    </section>
  );
}
