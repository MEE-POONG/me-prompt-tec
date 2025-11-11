import React from "react";
import Image from "next/image";
import { allProfiles, Profile } from "@/data/profiles";

// 🚨 1. (แก้ไข) นำเข้า FaBriefcase แทน FaLinkedin
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FolderKanban } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="py-20 bg-gray-100">
      {/* ... (ส่วนหัว Section - เหมือนเดิม) ... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 3. ใช้ .map() วนลูปข้อมูล */}
          {allProfiles.map((profile: Profile) => (
            <div
              key={profile.id}
              // 4. Card หลัก (relative, aspect-ratio, group)
              className="relative aspect-9/12 rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* 5. รูปภาพ (Background) */}
              <Image
                className="transition-transform duration-500 ease-in-out group-hover:scale-110" // (ใช้ group-hover)
                src={profile.imageSrc}
                alt={profile.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={profile.id <= 4} // 🚨 (ปรับปรุง) โหลด 4 ภาพแรกเร็วขึ้น
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm text-white transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {profile.name}
                </h2>
                <p className="text-md font-medium text-blue-300 mb-4">
                  {profile.title}
                </p>

                {/* 7. ไอคอน Social Media */}
                <div className="flex justify-center gap-5 mt-4">
                  {profile.instagram && (
                    <a
                      href={profile.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                      aria-label={`${profile.name} Instagram`} // 🚨 (ปรับปรุง) เพิ่ม Accessibility
                    >
                      <FaInstagram size={24} />
                    </a>
                  )}
                  {profile.github && (
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                      aria-label={`${profile.name} GitHub`} // 🚨 (ปรับปรุง) เพิ่ม Accessibility
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {profile.portfolio && (
                    <a
                      href={profile.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                      aria-label={`${profile.name} LinkedIn`} // 🚨 (ปรับปรุง) เพิ่ม Accessibility
                    >
                      <FolderKanban size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
