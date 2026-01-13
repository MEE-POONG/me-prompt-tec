import React, { forwardRef, ForwardedRef } from "react";
import Image from "next/image";
import Link from "next/link";

const PermissionSection = forwardRef(function PermissionSection(
  _props: React.HTMLAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    // ✅ พื้นหลังขาวโล่ง ๆ
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center"
      >
        {/* ฝั่งซ้าย */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-violet-700 to-pink-500">
            เราเชื่อว่าความสำเร็จของลูกค้าคือ
            <br className="hidden md:block" />
            ความสำเร็จของเรา
          </h2>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            ทุกโครงการของ{" "}
            <span className="font-semibold text-slate-900">Me Prompt</span>{" "}
            ถูกสร้างขึ้นด้วยความตั้งใจ เพื่อให้เทคโนโลยีช่วยยกระดับธุรกิจของคุณ
            ได้จริงในทุกมิติ ทั้งด้านประสิทธิภาพ ประสบการณ์ผู้ใช้
            และการเติบโตระยะยาว
          </p>

          <ul className="space-y-3 text-sm md:text-base text-slate-700 max-w-lg mx-auto md:mx-0">
            {[
              "พัฒนาโซลูชันที่ตอบโจทย์ธุรกิจอย่างแท้จริง",
              "ให้คำปรึกษาและซัพพอร์ตอย่างมืออาชีพ",
              "ทำงานโปร่งใส ตรงเวลา และมีคุณภาพ",
              "เติบโตไปพร้อมกับลูกค้าอย่างยั่งยืน",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500 via-purple-500 to-sky-500 text-white text-xs shadow-md shadow-fuchsia-300/50">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3">
            <Link href="/contact">
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-fuchsia-300/50 transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110">
                ติดต่อเรา
              </button>
            </Link>
          </div>
        </div>

        {/* ฝั่งขวา: โลโก้ + ME PROMPT TECHNOLOGY */}
        <div className="relative flex flex-col items-center justify-center">
          {/* ตัดพื้นหลังฟุ้ง ๆ ออก ให้โลโก้ลอยบนสีขาว */}
          <div className="flex flex-col items-center -space-y-1 sm:-space-y-2 w-fit">
            <Image
              src="/image/logo_new.png"
              alt="ME PROMPT TEC Logo"
              width={520}
              height={360}
              className="w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto object-contain drop-shadow-2xl mx-auto"
            />

            <p className="mt-0 text-base sm:text-lg md:text-xl font-black tracking-[0.35em] uppercase text-center bg-clip-text text-transparent bg-linear-to-r from-sky-500 via-violet-600 to-pink-500">
              ME PROMPT TECHNOLOGY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default PermissionSection;
