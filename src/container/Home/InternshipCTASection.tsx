import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { BookCopy, Cpu, Star, UserRound,  } from "lucide-react";
import Link from "next/link";

const joinicons = [
  {
    icon: <BookCopy className="w-10 h-10 text-blue-500" />,
    title: "โปรเจกต์จริง",
  },
  {
    icon: <Cpu  className="w-10 h-10 text-blue-500" />,
    title: "เทคโนโลยีล่าสุด",
  },
  {
    icon: <UserRound  className="w-10 h-10 text-blue-500" />,
    title: "ทีมมืออาชีพ",
  },
  {
    icon: <Star  className="w-10 h-10 text-blue-500" />,
    title: "ประสบการณ์",
  },
];

export default function InternshipCTASection() {
  return (
    <section className="py-20 relative bg-linear-to-tr from-cyan-400 via-blue-600 to-purple-800 text-white">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4  text-white">
          เข้าร่วมทีมกับเรา
        </h2>
        <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
          เปิดรับนักศึกษาฝึกงาน/สหกิจศึกษา ร่วมทำโปรเจกต์จริง
          เรียนรู้จากผู้เชี่ยวชาญ พัฒนาทักษะเพื่ออนาคตในอุตสาหกรรมเทคโนโลยี
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 text-white justify-items-center">
          {joinicons.map((joinicon, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center mb-12 md:mb-0 md:w-3/4"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow-md mb-4">
                {joinicon.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {joinicon.title}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/internship"
          className="inline-block bg-white text-gray-600 px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500 hover:text-amber-50 transition-all duration-300 hover:scale-110"
        >
          ดูข้อมูลโปรแกรมฝึกงาน
        </Link>
      </div>
    </section>
  );
}
