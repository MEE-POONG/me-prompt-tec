import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'; 

const universityPartners = [
  { 
    id: 1, 
    name: 'Computer Science RMUTI', 
    logoPath: '/img/logo_cs.jpg',
    altText: 'โลโก้ Computer Science RMUTI',
    facebookUrl: 'https://www.facebook.com/csrmuti?rdid=JnkW6ybRPUu45aAf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17z7FffR7e%2F#'
  },
  { 
    id: 2, 
    name: 'Information Systems RMUTI', 
    logoPath: '/img/logo_is.jpg',
    altText: 'โลโก้ Information Systems RMUTI',
    facebookUrl: 'http://facebook.com/is.ba.rmuti' 
  },
  { 
    id: 3, 
    name: 'Multimedia Technology RMUTI', 
    logoPath: '/img/logo_mt.jpg',
    altText: 'โลโก้ Multimedia Technology RMUTI',
    facebookUrl: 'https://www.facebook.com/multimedia.rmuti' 
  },
]

export default function PartnersSection() {
  return (
    <section className=" bg-white min-h-screen py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            
            <h2 className="text-5xl font-extrabold text-blue-600">
              ความร่วมมือกับสถาบันการศึกษา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              เรามุ่งมั่นในการเสริมสร้างศักยภาพคนรุ่นใหม่ ให้พร้อมสำหรับโลกเทคโนโลยี
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {universityPartners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 
                           transition-all duration-300 group overflow-hidden 
                           hover:scale-105 hover:shadow-2xl" 
              >
                <div className="relative w-full h-56 flex items-center justify-center"> 
                  <Image
                    src={partner.logoPath}
                    alt={partner.altText}
                    width={200}
                    height={200}
                    objectFit="contain" 
                    className="max-w-full max-h-full" 
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

          <div className="text-center mt-12">
            <Link
              href="/partnerships"
              className="inline-block font-semibold text-blue-600 hover:text-yellow-500 transition-all hover:scale-105 duration-200"
            >
              ดูความร่วมมือทั้งหมด
            </Link>
          </div>
        </div>
      </section>
  );
}