import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FrontendNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "ผลงาน", href: "/portfolio" },
    { label: "ฝึกงาน", href: "/internship" },
    { label: "พันธมิตร", href: "/partnerships" },
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/40 py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/image/logo_new.png"
                alt="ME PROMPT TECHNOLOGY Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              {/* ✅ ปรับชื่อเป็น ME PROMPT TECHNOLOGY พร้อมไล่สี Gradient */}
              <span className="text-lg md:text-xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-600 to-pink-500">
                ME PROMPT TEC
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold transition-colors relative group ${isActive(link.href)
                    ? "text-purple-600"
                    : "text-slate-600 hover:text-purple-600"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}

            <Link href="/contact">
              <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white text-sm font-bold transition-all shadow-lg shadow-fuchsia-400/40 flex items-center gap-2 group hover:-translate-y-0.5 hover:brightness-110">
                ติดต่อเรา
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-purple-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-bold py-3 border-b border-slate-100 ${isActive(link.href) ? "text-purple-600" : "text-slate-800"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full mt-4 px-5 py-3 rounded-xl bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white font-bold shadow-lg shadow-fuchsia-400/40">
                ติดต่อเรา
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}