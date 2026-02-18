import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPartners, Partner } from "@/lib/partners-api";
import { ExternalLink, Loader2, Globe } from "lucide-react";

export default function CardSection_partnership() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getPartners();
        setPartners(data);
      } catch (err) {
        console.error(err);
        setError("ไม่สามารถโหลดข้อมูลพันธมิตรได้");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section className="py-32 flex justify-center items-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
          <p className="text-slate-500 font-medium">กำลังเชื่อมต่อข้อมูล...</p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="py-32 text-center">
        <div className="inline-block p-6 rounded-2xl bg-red-50 border border-red-100 text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decor Blobs เพิ่มมิติ */}
      <div className="pointer-events-none absolute top-20 right-0 -mr-20 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      <div className="pointer-events-none absolute bottom-0 left-0 -ml-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl opacity-50 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* ❌ ลบส่วน Academic Partners ออกแล้วครับ */}

            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 drop-shadow-sm">
                ความร่วมมือกับสถาบันการศึกษา
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              เราจับมือกับสถาบันชั้นนำเพื่อแลกเปลี่ยนองค์ความรู้ และร่วมกันพัฒนาศักยภาพคนรุ่นใหม่
              ให้พร้อมสำหรับการทำงานจริงในโลกเทคโนโลยี
            </p>
          </motion.div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              {/* Glass Card Container */}
              <div className="h-full flex flex-col bg-white/70 backdrop-blur-xl border border-white/60 rounded-4xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2">

                {/* Logo Area */}
                <div className="relative h-56 w-full bg-linear-to-b from-white to-slate-50/50 flex items-center justify-center p-8 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-colors duration-500">
                  {/* Decorative Circle BG */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100">
                    <div className="w-40 h-40 bg-white rounded-full shadow-inner blur-xl" />
                  </div>

                  {/* Logo Image */}
                  <div className="relative w-full h-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                    {partner.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain max-h-full drop-shadow-md"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <div className="text-slate-300 font-bold text-xl">NO LOGO</div>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col grow bg-white/40 border-t border-white/50">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100 mb-3 uppercase">
                      {partner.type || "Partner"}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                  </div>

                  {partner.description && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {partner.description}
                    </p>
                  )}

                  <div className="mt-auto pt-4 border-t border-slate-200/50 flex justify-between items-center">
                    {/* Link Button */}
                    {(partner.website || partner.facebookUrl) ? (
                      <Link
                        href={partner.website || partner.facebookUrl || "#"}
                        target="_blank"
                        className="group/btn flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <Globe size={16} className="text-slate-400 group-hover/btn:text-blue-500 transition-colors" />
                        <span>เยี่ยมชมเว็บไซต์</span>
                        <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </Link>
                    ) : (
                      <span className="text-xs text-slate-400 italic">No website available</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}