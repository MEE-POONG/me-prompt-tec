import React, { useState } from 'react'; // 1. 🚨 Import 'useState'
import Image from 'next/image';
import { allProfiles, Profile } from '@/data/profiles'; 

// 2. 🚨 นำเข้าไอคอน (ลบ FaLinkedin, เพิ่ม X)
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FolderKanban, X } from 'lucide-react'; 

export default function ProfileSection() { 
  
  // 3. 🚨 เพิ่ม State สำหรับ Modal
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  
  return (
    // 4. 🚨 เพิ่ม 'relative'
    <section className="py-20 bg-gray-100 relative"> 
      
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
               
               {/* 5. 🚨 (แก้ไข) bg-linear-to-t -> bg-gradient-to-t */}
               <div className="absolute bottom-0 left-0 right-0 p-6 
                               bg-gradient-to-t from-black/80 via-black/60 to-transparent 
                               backdrop-blur-sm text-white
                               transition-all duration-500 ease-in-out
                               translate-y-full
                               group-hover:translate-y-0"
               >
                 
                 <h2 className="text-2xl font-bold text-white mb-1">
                   {profile.name}
                 </h2>
                 <p className="text-md font-medium text-blue-300 mb-4">
                   {profile.title}
                 </p>

                 {/* 6. 🚨 (แก้ไข) ไอคอน Social Media (ผสม <a> และ <button>) */}
                 <div className="flex justify-center gap-5 mt-4">
                   
                   {/* Instagram (เปิดแท็บใหม่) */}
                   {profile.instagram && (
                     <a
                       href={profile.instagram}
                       target="_blank" // ⬅️ เปิดแท็บใหม่
                       rel="noopener noreferrer"
                       className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                       aria-label={`${profile.name} Instagram`}
                     >
                       <FaInstagram size={24} />
                     </a>
                   )}

                   {/* GitHub (เปิดแท็บใหม่) */}
                   {profile.github && (
                     <a
                       href={profile.github}
                       target="_blank" // ⬅️ เปิดแท็บใหม่
                       rel="noopener noreferrer"
                       className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                       aria-label={`${profile.name} GitHub`}
                     >
                       <FaGithub size={24} />
                     </a>
                   )}

                   {/* Portfolio (เปิด Modal) */}
                   {profile.portfolio && (
                     <button
                       onClick={() => setModalUrl(profile.portfolio ?? null)} // ⬅️ เปิด Modal
                       className="text-white/80 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1"
                       aria-label={`${profile.name} Portfolio`} 
                     >
                       <FolderKanban size={24} />
                     </button>
                   )}
                 </div>
               </div>
             </div>
           ))}
           
         </div>
      </div>

      {/* 7. 🚨 (เพิ่ม) โค้ด Modal (สำหรับ Portfolio) */}
      {modalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop (พื้นหลังมืดๆ) */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setModalUrl(null)} // ⬅️ คลิกพื้นหลังเพื่อปิด
          />
          
          {/* Modal Content (กล่องสีขาว) */}
          <div className="relative z-10 w-full max-w-5xl h-[90vh] bg-white rounded-lg shadow-xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 rounded-t-lg">
              <span className="text-gray-600 text-sm truncate">{modalUrl}</span>
              <button 
                onClick={() => setModalUrl(null)} 
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Iframe */}
            <iframe 
              src={modalUrl} 
              className="w-full h-full rounded-b-lg" 
              title="Portfolio Preview"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </section>
  );
}