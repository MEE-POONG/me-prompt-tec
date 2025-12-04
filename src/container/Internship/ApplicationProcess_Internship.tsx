import React from "react";

export default function ApplicationProcess_Internship() {
  return (
    <section className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-linear-to-r from-[#0ea5e9] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
          ขั้นตอนการสมัคร
        </h2>

        <div className="flex flex-col md:flex-row justify-between text-center gap-6 md:gap-8">
          {/* 1 */}
          <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_14px_40px_rgba(15,23,42,0.12)] border border-slate-100">
            <div className="inline-flex justify-center items-center w-14 h-14 rounded-full bg-linear-to-br from-[#0ea5e9] to-[#6366f1] text-white font-bold text-2xl mb-4 shadow-md">
              1
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              ส่ง Resume/Portfolio
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              ส่งเอกสารของคุณผ่านทางอีเมลหรือลิงก์สมัครตามที่ระบุในประกาศ
            </p>
          </div>

          {/* 2 */}
          <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_14px_40px_rgba(15,23,42,0.12)] border border-slate-100">
            <div className="inline-flex justify-center items-center w-14 h-14 rounded-full bg-linear-to-br from-[#6366f1] to-[#a855f7] text-white font-bold text-2xl mb-4 shadow-md">
              2
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              สัมภาษณ์ออนไลน์
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              พูดคุยเกี่ยวกับเป้าหมาย ทักษะ และโปรเจกต์ที่คุณเคยทำ
            </p>
          </div>

          {/* 3 */}
          <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_14px_40px_rgba(15,23,42,0.12)] border border-slate-100">
            <div className="inline-flex justify-center items-center w-14 h-14 rounded-full bg-linear-to-br from-[#ec4899] to-[#f97316] text-white font-bold text-2xl mb-4 shadow-md">
              3
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              ประกาศผล
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              แจ้งผลการพิจารณาและนัดหมายวันเริ่มงานอย่างเป็นทางการ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
