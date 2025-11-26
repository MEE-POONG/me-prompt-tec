import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

import { getPartners, Partner } from "@/lib/partners-api";

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getPartners();
        setPartners(data.slice(0, 3));
      } catch (err) {
        console.error(err);
        setError("ไม่สามารถเชื่อมต่อกับระบบหลังบ้านได้ (กรุณาเปิด Server Port 3000)");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const gridClass =
    partners.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : partners.length === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (loading) {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 animate-pulse">
          กำลังโหลดข้อมูลพันธมิตร...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-red-400 text-sm">
          ⚠️ {error}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white relative z-10 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ส่วนหัวข้อ */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* ✅ แก้ไข: คืนค่า Gradient ไล่สีแบบต้นฉบับ */}
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 via-violet-700 to-red-400 bg-clip-text text-transparent">
            ความร่วมมือกับสถาบันการศึกษา
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ให้พร้อมสำหรับโลกเทคโนโลยี ผ่านเครือข่ายพันธมิตรที่แข็งแกร่ง
          </p>
        </motion.div>

        {/* Grid แสดงโลโก้ */}
        <motion.div 
          className={`grid gap-8 ${gridClass} justify-items-center`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              whileHover={{ y: -8 }} 
              className="w-full h-full bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 group overflow-hidden relative cursor-pointer transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-64 p-10 flex items-center justify-center bg-white group-hover:bg-slate-50/50 transition-colors duration-300">
                
                <Image
                  src={partner.logo || "/img/logo-placeholder.png"}
                  alt={partner.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                />

                {/* Overlay เมื่อ Hover */}
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                   <p className="text-white font-bold text-lg mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                     {partner.name}
                   </p>
                   <p className="text-slate-300 text-xs mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                     {partner.type || "สถาบันการศึกษา"}
                   </p>
                   
                   {partner.website && (
                      <Link 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 scale-90 group-hover:scale-100"
                      >
                        <span>เยี่ยมชม</span>
                        {partner.website.toLowerCase().includes('facebook') ? <FaFacebook /> : <FaExternalLinkAlt className="text-xs"/>}
                      </Link>
                   )}
                </div>
              </div>

              {/* แถบสีด้านล่าง */}
              <div className="h-1.5 w-full bg-linear-to-r from-blue-500 via-violet-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* ปุ่มลิงก์ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/partnerships"
            className="group inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-[#5a32d1] transition-colors duration-200"
          >
            <span>ดูความร่วมมือทั้งหมด</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}