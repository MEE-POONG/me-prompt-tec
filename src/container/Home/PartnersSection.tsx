import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// ✅ เพิ่ม FaGlobe เข้ามาด้วย
import { FaFacebook, FaGlobe } from "react-icons/fa"; 

// เรียกใช้ API ที่เราเตรียมไว้ (ต้องเปิดหลังบ้าน Port 3000 ไว้ด้วยนะ)
import { getPartners, Partner } from "@/lib/partners-api";

export default function PartnersSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        // ดึงข้อมูลจาก API หลังบ้าน
        const data = await getPartners();
        // ตัดมาแสดงแค่ 3 อันแรก
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

  // ถ้ากำลังโหลด
  if (loading) {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 animate-pulse">
          กำลังโหลดข้อมูลพันธมิตร...
        </div>
      </section>
    );
  }

  // ถ้า Error (เช่น ลืมเปิดหลังบ้าน)
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* หัวข้อ */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-600 via-violet-700 to-red-400 bg-clip-text text-transparent">
            ความร่วมมือกับสถาบันการศึกษา
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ให้พร้อมสำหรับโลกเทคโนโลยี
          </p>
        </div>

        {/* การ์ดโลโก้ (แสดงจาก Database จริง) */}
        <div className={`grid gap-8 ${gridClass} justify-items-center`}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group overflow-hidden hover:scale-105 hover:shadow-2xl relative"
            >
              <div className="relative w-full h-56 flex items-center justify-center">
                <Image
                  src={partner.logo || "/img/logo-placeholder.png"}
                  alt={partner.name}
                  width={220}
                  height={220}
                  className="max-w-full max-h-full object-contain p-6"
                />

                {/* Overlay ด้านล่าง */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 flex flex-col justify-end pb-6 items-center text-center bg-linear-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[1px] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <p className="font-bold text-lg text-white mb-3 px-4 leading-tight drop-shadow-md">
                    {partner.name}
                  </p>

                  {partner.website && (
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      {partner.website.toLowerCase().includes('facebook') ? (
                        <FaFacebook className="text-3xl" />
                      ) : (
                        <FaGlobe className="text-3xl" />
                      )}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่มลิงก์ไปหน้าพาร์ทเนอร์ทั้งหมด */}
        <div className="text-center mt-10">
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