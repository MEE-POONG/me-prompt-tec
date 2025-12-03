import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import HeroBanner_Internship from "@/container/Internship/HeroBanner_Internship";
import OpenPositions_Internship from "@/container/Internship/OpenPositions_Internship";
import ApplicationProcess_Internship from "@/container/Internship/ApplicationProcess_Internship";
import Allprofiles from "@/container/Internship/Allprofiles";
import { motion } from "framer-motion";

export default function Internship() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Layout>
      <Head>
        <title>Internship Program | โปรแกรมฝึกงาน</title>
        <meta name="description" content="เข้าร่วมโปรแกรมฝึกงานกับเรา" />
      </Head>

      {/* ✅ พื้นหลังหลัก: Mesh Gradient + White Overlay แบบเดียวกับ HeroSection ตัวอย่าง */}
      <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans text-slate-900">
        
        {/* BG Mesh Layer */}
        <div className="absolute inset-0 -z-40 bg-[radial-gradient(circle_at_0%_0%,#22d3ee_0,#e0f2fe_35%,transparent_70%),radial-gradient(circle_at_100%_0%,#a855f7_0,#f5d0fe_40%,transparent_70%),radial-gradient(circle_at_0%_100%,#f97316_0,#fee2e2_40%,transparent_75%),radial-gradient(circle_at_100%_100%,#6366f1_0,#e0e7ff_35%,transparent_75%)] opacity-60" />
        
        {/* White Overlay ให้ดูคลีน อ่านง่าย */}
        <div className="absolute inset-0 -z-30 bg-linear-to-b from-white/40 via-white/80 to-white" />

        <div className="relative z-10">
          <HeroBanner_Internship />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <Allprofiles interns={[]} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <OpenPositions_Internship />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <ApplicationProcess_Internship />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}