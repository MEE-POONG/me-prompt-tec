// src/container/Partnerships/CardSection_partnership.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
// 1. นำเข้า motion และ Variants
import { motion, Variants } from "framer-motion"; 
import { getPartners, Partner } from "@/lib/partners-api";

const CardSection_partnership = () => {
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
        setError("โหลดข้อมูลพันธมิตรไม่สำเร็จ");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // 2. ตั้งค่า Animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // ให้การ์ดโผล่มาทีละใบ ห่างกัน 0.15 วิ
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 }, // เริ่มต้น: จางและอยู่ต่ำลงไป
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (loading) {
    return (
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 animate-pulse">
          กำลังโหลดข้อมูลพันธมิตร...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      {/* ส่วนหัวข้อด้านบน (พื้นหลังขาว) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 pt-20 pb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a32d1]">
          ความร่วมมือกับสถาบันการศึกษา
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ผ่านเครือข่ายพันธมิตรด้านการศึกษาและเทคโนโลยี
        </p>
      </motion.div>

      {/* ส่วนการ์ด + พื้นหลังกราเดียนต์น้ำเงิน */}
      <div className="bg-linear-to-b from-[#0b6bff] via-[#008cff] to-[#00a8ff] py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* 3. ใช้ motion.div แทน div ปกติที่ Grid container */}
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // เริ่มเล่นเมื่อเลื่อนมาเห็นนิดหน่อย
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }} // ✨ Hover: ลอยขึ้น 12px
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-3xl shadow-lg shadow-slate-300/40 overflow-hidden flex flex-col h-full cursor-default"
              >
                {/* รูปโลโก้ เต็มกรอบแต่ยังโค้งมุม */}
                <div className="w-full h-56 bg-slate-50 overflow-hidden relative group">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Zoom รูปข้างในเมื่อ Hover การ์ด
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                      ไม่มีรูปโลโก้
                    </div>
                  )}
                </div>

                {/* เนื้อหาในการ์ด */}
                <div className="flex-1 px-6 pt-6 pb-5 flex flex-col text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#0b6bff]">
                    {partner.type || "สถาบันการศึกษา"}
                  </p>

                  {partner.description && (
                    <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                      {partner.description}
                    </p>
                  )}

                  {(partner.facebookUrl || partner.website) && (
                    <div className="mt-5 pt-4 border-t border-slate-100 w-full flex justify-center">
                      <motion.a
                        href={partner.facebookUrl || partner.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }} // ปุ่มเด้งสู้มือ
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-full border border-[#0b6bff] px-5 py-2 text-xs font-bold text-[#0b6bff] hover:bg-[#0b6bff] hover:text-white transition-colors"
                      >
                        <FaFacebook className="w-4 h-4" />
                        <span>เยี่ยมชมเว็บไซต์</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardSection_partnership;