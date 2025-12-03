import { BrainCircuit, CodeXml, Megaphone } from "lucide-react";

const services = [
  {
    icon: CodeXml,
    title: "Web & Mobile Development",
    description:
      "พัฒนาเว็บและแอปพลิเคชันที่ทันสมัย ตอบโจทย์ทุกธุรกิจด้วยเทคโนโลยีล่าสุด",
    gradient: "from-sky-500 via-blue-500 to-cyan-400",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "นำ AI และระบบอัตโนมัติมาเพิ่มประสิทธิภาพองค์กร ลดต้นทุน และเพิ่มความแม่นยำ",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Consulting & Training",
    description:
      "ให้คำปรึกษาและอบรมทีมงานด้านเทคโนโลยี เพื่อยกระดับศักยภาพขององค์กร",
    gradient: "from-emerald-500 via-teal-500 to-sky-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* 🔮 Mesh / Aurora background ด้านหลังแบบเบา ๆ ให้ดูล้ำยุคแต่ยังมินิมอล */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.20),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-72 w-[120%] -translate-x-1/2 opacity-70 blur-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.55),rgba(168,85,247,0.0),rgba(236,72,153,0.55),rgba(59,130,246,0.55))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ⭐ หัวข้อแบบคลีน ๆ ไม่มี Our Services ตามที่บอก */}
        <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 from-35% via-violet-700 to-red-400 bg-clip-text text-transparent mb-4">
          บริการของเรา
       </h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          เราออกแบบและพัฒนาโซลูชันเทคโนโลยีครบวงจร ตั้งแต่เว็บและแอปพลิเคชัน
                   ระบบหลังบ้าน ไปจนถึงการให้คำปรึกษาเชิงกลยุทธ์  
           เพื่อช่วยให้ธุรกิจของคุณเติบโตและแข่งขันได้อย่างมั่นใจในโลกดิจิทัล
  </p>
</div>


        {/* 🧊 Glassmorphism cards + micro-interaction */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group relative h-full">
              {/* glow เนียน ๆ บนมุมการ์ดเวลา hover */}
              <div
                className={`
                  pointer-events-none absolute -right-10 -top-10 h-28 w-28 
                  rounded-full bg-linear-to-tr ${service.gradient}
                  opacity-0 blur-2xl transition-opacity duration-500 
                  group-hover:opacity-70
                `}
              />

              <div className="relative h-full rounded-3xl border border-white/60 bg-white/70 px-7 py-8 backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                {/* icon แบบ glass + neon gradient */}
                <div
                  className={`
                    mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl
                    bg-linear-to-tr ${service.gradient} text-white
                    shadow-lg shadow-sky-300/40 ring-4 ring-white/40
                    transition-transform duration-500
                    group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-2
                  `}
                >
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* เส้นไฟเล็ก ๆ ด้านล่าง เป็น micro-interaction เวลา hover */}
                <div className="mt-6 h-px w-0 bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
