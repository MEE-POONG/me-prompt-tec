import React from 'react';
import Image from 'next/image';


// 🚨 1. แก้ไข Import:
// ต้อง Import 'allProfiles' และ 'Profile' (ที่เป็น named exports)
// และระบุ Path ที่ถูกต้องไปยังไฟล์ data (สมมติว่าใช้ @/data/profiles)
import { allProfiles, Profile } from '@/data/profiles'; // ⬅️ (แก้ Path นี้ถ้าจำเป็น)

// 2. 🚨 เปลี่ยนชื่อ Component ให้สื่อความหมาย (เช่น ProfileSection)
export default function ProfileSection() { 
  
  return (
    // 3. 🚨 แก้ไข Section ให้รองรับ Grid
    <section className="py-20 bg-gray-100">
      
      {/* (แนะนำ) เพิ่มส่วนหัวสำหรับ Section นี้ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           นักศึกษาฝึกงาน (Intern)
         </h2>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           บุคลากรมืออาชีพที่พร้อมขับเคลื่อนโปรเจกต์ของคุณให้สำเร็จ
         </p>
      </div>

      {/* 4. 🚨 สร้าง Grid Layout เพื่อรองรับหลาย Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
           {/* 5. 🚨 ใช้ .map() เพื่อวนลูปสร้าง Card จาก Array */}
           {allProfiles.map((profile: Profile) => ( // ⬅️ 2. (แนะนำ) ระบุ Type 'Profile'
             
             // นี่คือ Profile Card (นำ JSX เดิมของคุณมาใส่ใน .map())
             <div 
               key={profile.id} 
               className="bg-white rounded-2xl overflow-hidden shadow-xl w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
             >
               
               <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600" />

               <div className="relative -mt-16 flex justify-center">
                 <Image
                   className="rounded-full border-4 border-white shadow-lg object-cover" 
                   src={profile.imageSrc} 
                   alt={profile.name}
                   width={128} 
                   height={128}
                 />
               </div>

               <div className="p-6 text-center mt-4">
                 <h2 className="text-2xl font-bold text-gray-900 mb-1">
                   {profile.name}
                 </h2>
                 <p className="text-md font-medium text-blue-600 mb-4">
                   {profile.title}
                 </p>
                 <p className="text-gray-600 text-sm">
                   {profile.bio}
                 </p>
               </div>
               
             </div>
           ))} {/* ⬅️ จบ .map() */}
           
         </div>
      </div>
    </section>
  );
}