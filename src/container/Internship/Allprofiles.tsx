<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import { allProfiles, Profile } from '@/data/profiles'; 

// 🚨 1. (แก้ไข) นำเข้า FaBriefcase แทน FaLinkedin
import { FaInstagram, FaGithub, FaBriefcase } from 'react-icons/fa';
=======
import React from "react";
import Image from "next/image";

// 1. 🚨 นำเข้าข้อมูล (ตรวจสอบ Path ให้ถูกต้อง)
import { allProfiles, Profile } from "@/data/profiles"; // (สมมติว่า Path นี้ถูกต้อง)

// 2. 🚨 นำเข้าไอคอน (ต้อง npm install react-icons)
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
>>>>>>> 114580ef166c1931e55e9eb2ea039908c6933132

export default function ProfileSection() {
  return (
    <section className="py-20 bg-gray-100">
<<<<<<< HEAD
      
      {/* ... (ส่วนหัว Section - เหมือนเดิม) ... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
           {allProfiles.map((profile: Profile) => ( 
             
             <div 
               key={profile.id} 
               className="relative aspect-[9/12] rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group"
             >
               
               <Image
                 className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                 src={profile.imageSrc} 
                 alt={profile.name}
                 layout="fill" 
                 priority={profile.id <= 4}
               />

               <div className="absolute bottom-0 left-0 right-0 p-6 
                               bg-gradient-to-t from-black/80 via-black/60 to-transparent 
=======
      {/* (ส่วนหัว Section - เหมือนเดิม) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          นักศึกษาฝึกงาน (Intern)
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          บุคลากรมืออาชีพที่พร้อมขับเคลื่อนโปรเจกต์ของคุณให้สำเร็จ
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 3. ใช้ .map() วนลูปข้อมูล */}
            {allProfiles.map((profile: Profile) => (
              <Link
              href={`/internships_detail/${profile.id}`}
              key={profile.id}
            >
              <div
                key={profile.id}
                // 4. Card หลัก (relative, aspect-ratio, group)
                className="relative aspect-9/12 rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group"
              >
                {/* 5. รูปภาพ (Background) */}
                <Image
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" // (ใช้ group-hover)
                  src={profile.imageSrc}
                  alt={profile.name}
                  layout="fill"
                  priority={profile.id <= 4} // 🚨 (ปรับปรุง) โหลด 4 ภาพแรกเร็วขึ้น
                />

                {/* 6. (แก้ไข) ส่วนเนื้อหา (วางซ้อนด้านล่าง) */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 
                               bg-linear-to-t from-black/80 via-black/60 to-transparent 
>>>>>>> 114580ef166c1931e55e9eb2ea039908c6933132
                               backdrop-blur-sm text-white
                               transition-all duration-500 ease-in-out
                               translate-y-full
                               group-hover:translate-y-0"
<<<<<<< HEAD
               >
                 
                 <h2 className="text-2xl font-bold text-white mb-1">
                   {profile.name}
                 </h2>
                 <p className="text-md font-medium text-blue-300 mb-4">
                   {profile.title}
                 </p>
                 
                 <div className="flex justify-center gap-5 mt-4">
                   {profile.instagram && (
                     <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1" aria-label={`${profile.name} Instagram`}>
                       <FaInstagram size={24} />
                     </a>
                   )}
                   {profile.github && (
                     <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1" aria-label={`${profile.name} GitHub`}>
                       <FaGithub size={24} />
                     </a>
                   )}
                   
                   {/* 🚨 2. (แก้ไข) เปลี่ยนจาก linkedin เป็น portfolio */}
                   {profile.portfolio && ( 
                     <a 
                       href={profile.portfolio} // ⬅️ แก้ไข
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                       aria-label={`${profile.name} Portfolio`} // ⬅️ แก้ไข
                     >
                       <FaBriefcase size={24} /> {/* ⬅️ แก้ไข */}
                     </a>
                   )}
                 </div>
=======
                >
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {profile.name}
                  </h2>
                  <p className="text-md font-medium text-blue-300 mb-4">
                    {profile.title}
                  </p>
>>>>>>> 114580ef166c1931e55e9eb2ea039908c6933132

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
                    {profile.linkedin && (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                        aria-label={`${profile.name} LinkedIn`} // 🚨 (ปรับปรุง) เพิ่ม Accessibility
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </Link>
            ))}
          
        </div>
      </div>
    </section>
  );
}
