import React from 'react';
import Image from 'next/image';
import { allProfiles, Profile } from '@/data/profiles'; 

// 🚨 1. (แก้ไข) นำเข้า FaBriefcase แทน FaLinkedin
import { FaInstagram, FaGithub, FaBriefcase } from 'react-icons/fa';

export default function ProfileSection() { 
  
  return (
    <section className="py-20 bg-gray-100">
      
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

               </div>
               
             </div>
           ))} 
           
         </div>
      </div>
    </section>
  );
}