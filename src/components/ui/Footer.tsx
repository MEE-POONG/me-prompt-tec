import Link from "next/link";
import Image from "next/image"; // ✅ Import Image
import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/40 bg-white/60 backdrop-blur-xl pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* --- 1. Brand Info --- */}
          <div className="col-span-1 space-y-4">
            
            {/* ✅ ใช้โลโก้รูปภาพแบบเดียวกับ Navbar */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                 <div className="relative w-12 h-12 transition-transform group-hover:scale-105 duration-300">
                    <Image 
                        src="/image/logo.png" 
                        alt="ME PROMPT TEC Logo" 
                        fill
                        className="object-contain"
                    />
                 </div>
                 <div className="flex flex-col justify-center">
                     <span className="text-xl font-extrabold tracking-tight leading-none text-blue-600">
                        ME PROMPT <span className="text-orange-500">TEC</span>
                     </span>
                 </div>
            </Link>
            
            <p className="text-slate-500 text-sm leading-relaxed mt-2">
              "มีพร้อมเทคโนโลยี" <br/>
              พันธมิตรดิจิทัลที่จะช่วยขับเคลื่อนธุรกิจของคุณด้วยนวัตกรรมที่ทันสมัย
            </p>
          </div>

          {/* --- 2. Menu --- */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">เมนูหลัก</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "หน้าแรก", href: "/" },
                { label: "ผลงาน", href: "/portfolio" },
                { label: "ฝึกงาน", href: "/internship" },
                { label: "พันธมิตร", href: "/partnerships" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-blue-600 transition-all duration-200 hover:translate-x-1 flex items-center gap-1 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- 3. Services --- */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">บริการ</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="hover:text-blue-600 transition-colors cursor-default">Web Development</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">Mobile Application</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">AI Solutions</li>
              <li className="hover:text-blue-600 transition-colors cursor-default">IT Consulting</li>
            </ul>
          </div>

          {/* --- 4. Contact --- */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">ติดต่อเรา</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2 group">
                 <Mail size={16} className="text-blue-500 group-hover:scale-110 transition-transform"/> 
                 <span className="group-hover:text-blue-600 transition-colors">me.prompt.tec@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 group">
                 <Phone size={16} className="text-blue-500 group-hover:scale-110 transition-transform"/> 
                 <span className="group-hover:text-blue-600 transition-colors">063-494-1526</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100 transition-all shadow-sm">
                    <Github size={18} />
                </a>
                <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm">
                    <Facebook size={18} />
                </a>
            </div>
          </div>
        </div>

        {/* --- Copyright --- */}
        <div className="border-t border-slate-200/60 pt-8 text-center">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} ME PROMPT TECHNOLOGY CO., LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}