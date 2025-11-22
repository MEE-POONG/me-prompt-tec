// src/container/Partnerships/CardSection_partnership.tsx

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          กำลังโหลดข้อมูลพันธมิตร...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group overflow-hidden hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 flex items-center justify-center">
                <Image
                  src={partner.logo || "/img/logo_cs.jpg"}
                  alt={partner.name}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full"
                  style={{ objectFit: "contain" }}
                />
                <div className="absolute inset-x-0 bottom-0  h-1/3  flex flex-col items-center justify-center p-4  text-center  bg-linear-to-t from-black/20 via-black/40 to-transparent  backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
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

        {/* CTA ด้านล่างเดิม ถ้าอยากให้ยังอยู่ก็ใส่เพิ่มตรงนี้ได้ */}
      </div>
    </section>
  );
};

export default CardSection_partnership;
