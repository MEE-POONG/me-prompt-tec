import React from "react";

export default function ApplicationProcess_Internship() {
  return (
    <section className="pt-20 bg-white pb-40">
      {" "}
      {/* 🚨 7. สลับเป็น bg-gray-100 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          ขั้นตอนการสมัคร
        </h2>
        <div className="flex flex-col md:flex-row justify-between text-center gap-8">
          {/* ขั้นตอนที่ 1 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ส่ง Resume/Portfolio
            </h3>
            <p className="text-gray-600">
              ส่งเอกสารของคุณผ่านทางอีเมลหรือลิงก์สมัคร
            </p>
          </div>
          {/* ขั้นตอนที่ 2 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              สัมภาษณ์ออนไลน์
            </h3>
            <p className="text-gray-600">
              พูดคุยเกี่ยวกับความสนใจและทักษะของคุณ
            </p>
          </div>
          {/* ขั้นตอนที่ 3 */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ประกาศผล
            </h3>
            <p className="text-gray-600">
              แจ้งผลการพิจารณาและนัดหมายวันเริ่มงาน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
