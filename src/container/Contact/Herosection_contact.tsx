import React from "react";
import { motion } from "framer-motion";

export default function Herosection_contact() {
  return (
    <section className="relative pt-32 pb-12 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* ลบ Get in touch ออกแล้วครับ */}

        <h1 className="text-xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-sm">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-600 to-pink-500">
            ติดต่อเรา
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
          เราพร้อมเปลี่ยนไอเดียของคุณให้เป็นจริง <br className="hidden md:block" />
          ปรึกษาเรื่องโปรเจกต์ สอบถามข้อมูล หรือแค่อยากทักทาย ทีมงาน Me Prompt ยินดีต้อนรับครับ
        </p>
      </motion.div>
    </section>
  );
}