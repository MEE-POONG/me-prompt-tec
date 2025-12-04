
"use client";

import Layout from "@/components/Layout";
import { Card_Contact } from "@/container/Contact/Card_Contact";
import Herosection_contact from "@/container/Contact/Herosection_contact";
import MapSection_Contact from "@/container/Contact/MapSection_Contact";
import { motion } from "framer-motion";
import React from "react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-slate-50 selection:bg-fuchsia-200 selection:text-fuchsia-900">
        
        {/* 🔥 เพิ่ม Background Global ตรงนี้ เพื่อให้ทุก Section มีพื้นหลังเชื่อมกัน */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        <div className="fixed top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="fixed top-0 -right-4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="fixed -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

        <Herosection_contact />
        
        <div className="relative z-10 -mt-10 mb-20">
          <Card_Contact from={undefined} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <MapSection_Contact />
        </motion.div>
      </div>
    </Layout>
  );
}