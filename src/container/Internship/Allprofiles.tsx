import React, { useState } from 'react'; 
import Image from 'next/image';
import { allProfiles, Profile } from '@/data/profiles'; 

// 1. 🚨 (แก้ไข) Import ไอคอนเพิ่ม
import { FaInstagram, FaGithub } from 'react-icons/fa';
// (ต้อง npm install lucide-react ถ้ายังไม่มี)
import { FolderKanban, X, Smartphone, Monitor } from 'lucide-react'; // ⬅️ เพิ่ม Monitor, Smartphone

export default function ProfileSection() { 
  
  // (State เดิมสำหรับ URL)
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  
  // 2. 🚨 (เพิ่ม) State สำหรับสลับหน้าจอ (PC/Mobile)
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  
  // 3. 🚨 (เพิ่ม) ฟังก์ชันสำหรับเปิด Modal
  const openModal = (url: string | undefined | null) => {
    setModalUrl(url ?? null);
    setViewMode('desktop'); // ⬅️ Reset เป็น Desktop ทุกครั้งที่เปิด
  };

  // 4. 🚨 (เพิ่ม) ฟังก์ชันสำหรับปิด Modal
  const closeModal = () => {
    setModalUrl(null);
  };

  return (
    // 4. 🚨 เพิ่ม 'relative'
    <section className="py-20 bg-white relative"> 

      
      {/* (ส่วนหัว Section - เหมือนเดิม) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
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
               
               {/* (Image - เหมือนเดิม) */}
               <Image
                 className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                 src={profile.imageSrc}
                 alt={profile.name}
                 fill 
                 style={{ objectFit: "cover" }}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 priority={profile.id <= 4}
               />
               
               {/* (Overlay - เหมือนเดิม) */}
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

                 {/* 5. 🚨 (แก้ไข) ไอคอน Social Media (เปลี่ยน onClick) */}
                 <div className="flex justify-center gap-5 mt-4">
                   {/* Instagram (เปิดแท็บใหม่) */}
                   {profile.instagram && (
                     <a
                       href={profile.instagram}
                       target="_blank"
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
                       target="_blank"
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
                       onClick={() => openModal(profile.portfolio)} // ⬅️ ใช้ฟังก์ชันใหม่
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
              <span className="text-gray-600 text-sm truncate hidden md:block">{modalUrl}</span>

              {/* (ขวา) ปุ่มสลับ PC / Mobile และ ปุ่มปิด */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewMode('desktop')}
                  className={`p-2 rounded-md ${viewMode === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} transition-colors`}
                  aria-label="Desktop View"
                >
                  <Monitor size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('mobile')}
                  className={`p-2 rounded-md ${viewMode === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} transition-colors`}
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
                  ${viewMode === 'desktop' ? 'w-full' : 'w-[375px] max-w-full'} 
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