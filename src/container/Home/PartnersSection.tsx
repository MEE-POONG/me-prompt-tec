// src/container/Home/PartnersSection.tsx

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";

import { getPartners, Partner } from "@/lib/partners-api";

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getPartners();
        // ถ้าอยากโชว์แค่ 3 ตัวบนหน้าแรก ก็ใช้ slice(0, 3)
        setPartners(data.slice(0, 3));
      } catch (err) {
        console.error(err);
        setError("โหลดข้อมูลพันธมิตรไม่สำเร็จ");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <section className="bg-white min-h-screen py-40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          กำลังโหลดข้อมูลพันธมิตร...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white min-h-screen py-40">
        <div className="max-w-7xl mx-auto px-4 text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-4xl font-bold bg-linear-to-r from-blue-600 from-35% via-violet-700 to-red-400 bg-clip-text text-transparent">
            ความร่วมมือกับสถาบันการศึกษา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ให้พร้อมสำหรับโลกเทคโนโลยี
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group overflow-hidden hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 flex items-center justify-center">
                <Image
                  src={partner.logo || "/img/logo_cs.jpg"} // เผื่อโลโก้ว่าง
                  alt={partner.name}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 flex flex-col items-center justify-center p-4 text-center bg-linear-to-t from-black/20 via-black/40 to-transparent backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <p className="font-bold text-lg text-white mb-2">
                    {partner.name}
                  </p>
                  {partner.facebookUrl && (
                    <Link
                      href={partner.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-200"
                    >
                      <FaFacebook className="text-3xl" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/partnerships"
            className="inline-block font-semibold text-blue-600 hover:text-yellow-500 transition-all hover:scale-105 duration-200"
          >
            ดูความร่วมมือทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
