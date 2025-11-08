import React from "react";
import Image from "next/image";

export default function PermissionSection() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/img/logo.png"
            alt="Our Commitment"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-none"
          />
        </div>

        {/* เนื้อหาด้านขวา */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            คำมั่นของเรา
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            เราเชื่อว่าความสำเร็จของลูกค้าคือความสำเร็จของเรา ทุกโครงการของ{" "}
            <span className="font-semibold">Me Prompt</span>
            ถูกสร้างขึ้นด้วยความตั้งใจ เพื่อให้เทคโนโลยีช่วยยกระดับธุรกิจของคุณ
            ได้จริงในทุกมิติ
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>พัฒนาโซลูชันที่ตอบโจทย์ธุรกิจอย่างแท้จริง</li>
            <li>ให้คำปรึกษาและซัพพอร์ตอย่างมืออาชีพ</li>
            <li>ทำงานโปร่งใส ตรงเวลา และมีคุณภาพ</li>
            <li>เติบโตไปพร้อมกับลูกค้าอย่างยั่งยืน</li>
          </ul>

          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-yellow-500  border-2 border-white/20 transition-all duration-300 hover:scale-110"
          >
            ติดต่อเรา
          </a>
        </div>
      </div>
    </section>
  );
}
