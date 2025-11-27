"use client"; // ต้องใส่เพราะมีการใช้ useEffect, useState

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// Define Interface ให้ตรงกับ API
interface Position {
  id: string;
  title: string;
  description: string;
  isOpen: boolean;
}

export default function OpenPositions_Internship() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch ข้อมูลจาก API ---
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

  return (
    <section id="open-positions" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-6xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-violet-700 to-red-400 bg-clip-text text-transparent">
            โปรแกรมฝึกงาน (Internship)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            เริ่มต้นเส้นทางอาชีพของคุณกับเรา เรียนรู้จากโปรเจกต์จริงและทีมงานมืออาชีพ
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* 1. Loading State */}
          {loading && (
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin text-blue-600" size={40} />
            </div>
          )}

          {/* 2. Empty State (ถ้าไม่มีตำแหน่งเปิดรับ) */}
          {!loading && positions.filter((p) => p.isOpen).length === 0 && (
            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">
                ขณะนี้ยังไม่มีตำแหน่งที่เปิดรับสมัคร
              </p>
              <p className="text-sm text-gray-400">
                โปรดติดตามประกาศอีกครั้งในภายหลัง
              </p>
            </div>
          )}

          {/* 3. Map Data Loop (แสดงเฉพาะที่ isOpen = true) */}
          {positions
            .filter((position) => position.isOpen)
            .map((position) => (
              <div
                key={position.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-100"
              >
                <div>
                  <h3 className="text-xl font-bold text-blue-800">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{position.description}</p>
                </div>
                
                {/* ปุ่มสมัคร ส่ง ID ไปด้วย เพื่อให้หน้าฟอร์ม Auto-select */}
                <Link
                  href={`/Sigup_Intern?position_id=${position.id}`}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-4 md:mt-0"
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