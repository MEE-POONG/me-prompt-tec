import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const allPartners = [
  {
    id: 1,
    name: "Computer Science RMUTI",
    logoPath: "/img/logo_cs.jpg",
    altText: "โลโก้ Computer Science RMUTI",
    facebookUrl:
      "https://www.facebook.com/csrmuti?rdid=JnkW6ybRPUu45aAf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17z7FffR7e%2F#",
  },
  {
    id: 2,
    name: "Information Systems RMUTI",
    logoPath: "/img/logo_is.jpg",
    altText: "โลโก้ Information Systems RMUTI",
    facebookUrl: "http://facebook.com/is.ba.rmuti",
  },
  {
    id: 3,
    name: "Multimedia Technology RMUTI",
    logoPath: "/img/logo_mt.jpg",
    altText: "โลโก้ Multimedia Technology RMUTI",
    facebookUrl: "https://www.facebook.com/multimedia.rmuti",
  },
];

const CardSection_partnership = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {allPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group overflow-hidden hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 flex items-center justify-center">
                <Image
                  src={partner.logoPath}
                  alt={partner.name}
                  width={200}
                  height={200}
                  className="max-w-full max-h-full"
                  style={{ objectFit: "contain" }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 
                             h-1/3 
                             flex flex-col items-center justify-center p-4 
                             text-center 
                             bg-linear-to-t from-black/20 via-black/40 to-transparent 
                             backdrop-blur-[2px]
                             translate-y-full group-hover:translate-y-0
                             opacity-0 group-hover:opacity-100
                             transition-all duration-300 ease-out"
                >
                  <p className="font-bold text-lg text-white mb-2">
                    {partner.name}
                  </p>
                  {/* (D) ไอคอน Facebook */}
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

        {/* (ส่วน CTA "สนใจร่วมเป็นพันธมิตร") */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-blue-600">
            สนใจร่วมเป็นพันธมิตรกับเรา?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            เรามองหาพันธมิตรใหม่ๆ ทั้งสถาบันการศึกษาและบริษัทเอกชน
            เพื่อร่วมกันสร้างสรรค์นวัตกรรมและพัฒนาบุคลากรด้านเทคโนโลยี
            หากคุณสนใจ, ติดต่อเราได้เลย
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-600 border-2 border-white/20 transition-all duration-300 hover:scale-110"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection_partnership;