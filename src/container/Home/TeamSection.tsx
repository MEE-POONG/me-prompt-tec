import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Member } from "@/types/member";

// 1. 🚨 (แก้ไข) Import ไอคอนเพิ่ม
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// (ต้อง npm install lucide-react ถ้ายังไม่มี)
import { FolderKanban, X, Smartphone, Monitor } from "lucide-react"; // ⬅️ เพิ่ม Monitor, Smartphone

export default function TeamSection() {
  // State สำหรับข้อมูล Members จาก API
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // (State เดิมสำหรับ URL)
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  // 2. 🚨 (เพิ่ม) State สำหรับสลับหน้าจอ (PC/Mobile)
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/members");
        const data = await response.json();

        if (data.success) {
          setMembers(data.data.members);
        } else {
          setError("ไม่สามารถดึงข้อมูลได้");
        }
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // 3. 🚨 (เพิ่ม) ฟังก์ชันสำหรับเปิด Modal
  const openModal = (url: string | undefined | null) => {
    setModalUrl(url ?? null);
    setViewMode("desktop"); // ⬅️ Reset เป็น Desktop ทุกครั้งที่เปิด
  };

  // 4. 🚨 (เพิ่ม) ฟังก์ชันสำหรับปิด Modal
  const closeModal = () => {
    setModalUrl(null);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <style jsx>{`
          @keyframes tech-spin {
            0% {
              transform: rotate(0deg);
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: rotate(360deg);
              opacity: 0.6;
            }
          }
          .animate-tech-spin {
            animation: tech-spin 1.2s ease-in-out infinite;
          }
        `}</style>

        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-gray-300"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500 border-t-transparent animate-tech-spin"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    // 4. 🚨 เพิ่ม 'relative'
    <section className="py-20 bg-white relative">
      {/* (ส่วนหัว Section - เหมือนเดิม) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text- mb-4 bg-linear-to-r from-blue-600 from-35% via-violet-700  to-red-400 bg-clip-text text-transparent">
          Our Team Members
        </h2>
        <p className="text-lg text-gray-600 max-w-6xl mx-auto">
          พวกเราเป็นของคนรุ่นใหม่ที่ มุ่งเน้นการพัฒนาระบบซอฟท์แวร์
          การออกแบบความรู้การตลาดออนไลน์ และบริการเว็บไซต์ครบวงจร เรามุ่งมั่น
          ค้นคว้า วิจัย เทคโนโลยีใหม่ๆ
          เพื่อพัฒนาบริการของเราให้เกิดผลลัพธ์ที่ดีให้กับลูกค้า
          ด้วยทีมงานรุ่นใหม่ เราตั้งใจทำงานหนัก เพื่อสร้างความมั่นใจให้ท่าน
        </p>
        <p className="text-lg text-gray-600">
          ว่าท่านจะได้รับบริการ ที่เหนือความคาดหมาย
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => {
            const displayName =
              member.name.display || `${member.name.first} ${member.name.last}`;
            const portfolioUrl = member.socials?.website;

            return (
              <div
                key={member.id}
                className="relative aspect-9/12 rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group"
              >
                {/* (Image - เหมือนเดิม) */}
                <Image
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={member.photo || "/image/default-avatar.jpg"}
                  alt={displayName}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />

                {/* (Overlay - เหมือนเดิม) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm text-white transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {displayName}
                  </h2>
                  <p className="text-md font-medium text-blue-300 mb-4">
                    {member.title || member.department || "Team Member"}
                  </p>

                  {/* 5. 🚨 (แก้ไข) ไอคอน Social Media (เปลี่ยน onClick) */}
                  <div className="flex justify-center gap-5 mt-4">
                    {/* Facebook */}
                    {member.socials?.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} Facebook`}
                      >
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {/* Instagram (เปิดแท็บใหม่) */}
                    {member.socials?.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} Instagram`}
                      >
                        <FaInstagram size={24} />
                      </a>
                    )}
                    {/* X/Twitter */}
                    {member.socials?.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} X`}
                      >
                        <FaXTwitter size={24} />
                      </a>
                    )}
                    {/* LinkedIn */}
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} LinkedIn`}
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    {/* GitHub (เปิดแท็บใหม่) */}
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} GitHub`}
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {/* Portfolio (เปิด Modal) */}
                    {portfolioUrl && (
                      <button
                        onClick={() => openModal(portfolioUrl)} // ⬅️ ใช้ฟังก์ชันใหม่
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${displayName} Portfolio`}
                      >
                        <FolderKanban size={24} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. 🚨 (แก้ไข) โค้ด Modal ทั้งหมด */}
      {modalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop (คลิกเพื่อปิด) */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-xl flex flex-col">
            {/* Modal Header (เพิ่มปุ่มสลับจอ) */}
            <div className="flex justify-between items-center p-3 border-b bg-gray-50 rounded-t-lg">
              {/* (ซ้าย) URL */}
              <span className="text-gray-600 text-sm truncate hidden md:block">
                {modalUrl}
              </span>

              {/* (ขวา) ปุ่มสลับ PC / Mobile และ ปุ่มปิด */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`p-2 rounded-md ${viewMode === "desktop"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    } transition-colors`}
                  aria-label="Desktop View"
                >
                  <Monitor size={18} />
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`p-2 rounded-md ${viewMode === "mobile"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    } transition-colors`}
                  aria-label="Mobile View"
                >
                  <Smartphone size={18} />
                </button>

                {/* (ปุ่มปิด "กากบาท") */}
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-900 transition-colors ml-2" // ⬅️ เพิ่ม ml-2
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* 7. 🚨 (แก้ไข) Iframe Container */}
            <div className="w-full h-full p-4 bg-gray-300 rounded-b-lg overflow-auto flex justify-center">
              <iframe
                src={modalUrl}
                // (กำหนดขนาด iframe ตาม viewMode)
                className={`
                  h-full rounded-lg shadow-xl transition-all duration-300 ease-in-out
                  ${viewMode === "desktop" ? "w-full" : "w-[375px] max-w-full"} 
                `} // ⬅️ w-[375px] คือขนาดมือถือมาตรฐาน
                title="Portfolio Preview"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
