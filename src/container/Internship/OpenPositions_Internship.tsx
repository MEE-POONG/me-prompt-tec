"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface Position {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
}

export default function OpenPositions_Internship() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await fetch("/api/positions");
        if (res.ok) {
          const data = await res.json();
          setPositions(data);
        }
      } catch (error) {
        console.error("Failed to fetch positions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const openPositions = positions.filter((p) => p.isOpen);

  return (
    <section id="open-positions" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-[#0ea5e9] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
            โปรแกรมฝึกงาน (Internship)
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            เริ่มต้นเส้นทางอาชีพของคุณกับเรา ผ่านการทำงานกับโปรเจกต์จริง
            เรียนรู้ Workflow แบบมืออาชีพ และเตรียมความพร้อมสู่การทำงานเต็มตัว
          </p>
        </div>

        <div className="space-y-6">
          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin text-[#6366f1]" size={40} />
            </div>
          )}

          {/* Empty */}
          {!loading && openPositions.length === 0 && (
            <div className="text-center py-10 bg-white/80 backdrop-blur-xl rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500 text-lg mb-1">
                ขณะนี้ยังไม่มีตำแหน่งที่เปิดรับสมัคร
              </p>
              <p className="text-sm text-slate-400">
                โปรดติดตามประกาศโอกาสฝึกงานใหม่ ๆ จากเราอีกครั้งในภายหลัง
              </p>
            </div>
          )}

          {/* List */}
          {openPositions.map((position) => (
            <div
              key={position.id}
              className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_16px_45px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center border border-slate-100"
            >
              <div className="md:pr-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {position.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  {position.description}
                </p>
              </div>

              <Link
                href={`/Sigup_Intern?position_id=${position.id}`}
                className="mt-4 md:mt-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] text-white shadow-md hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
              >
                สมัคร
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
