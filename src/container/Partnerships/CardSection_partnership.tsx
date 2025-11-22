// src/container/Partnerships/CardSection_partnership.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
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

  if (loading) {
    return (
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500">
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
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a32d1]">
          ความร่วมมือกับสถาบันการศึกษา
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ผ่านเครือข่ายพันธมิตรด้านการศึกษาและเทคโนโลยี
        </p>
      </div>

      {/* ส่วนการ์ด + พื้นหลังกราเดียนต์น้ำเงิน */}
      <div className="bg-linear-to-b from-[#0b6bff] via-[#008cff] to-[#00a8ff] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-3xl shadow-lg shadow-slate-300/40 overflow-hidden flex flex-col"
              >
                {/* รูปโลโก้ เต็มกรอบแต่ยังโค้งมุม */}
                <div className="w-full h-56 bg-slate-100 overflow-hidden">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
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
                    <p className="mt-3 text-sm text-slate-600">
                      {partner.description}
                    </p>
                  )}

                  {(partner.facebookUrl || partner.website) && (
                    <div className="mt-5">
                      <a
                        href={partner.facebookUrl || partner.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#0b6bff] px-4 py-2 text-xs font-semibold text-[#0b6bff] hover:bg-[#0b6bff] hover:text-white transition-colors"
                      >
                        <FaFacebook className="w-4 h-4" />
                        <span>เยี่ยมชมเว็บไซต์</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection_partnership;
